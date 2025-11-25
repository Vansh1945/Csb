import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { collection, onSnapshot, deleteDoc, doc, updateDoc, orderBy, query } from "firebase/firestore";

// Icon components for reuse
const UserIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MessageIcon = () => (
  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
  </svg>
);

// Utility function to format date in DD/MM/YYYY format
const formatDate = (date) => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

// Utility function to format time in 12-hour format
const formatTime = (date) => {
  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });
};

function MessageRow({ message, onView, onDelete, onToggleAttended }) {
  const receivedDate = new Date(message.createdAt?.seconds * 1000);
  const attended = message.attended || false;

  return (
    <tr className={`border-b border-boutique-secondary/30 ${attended ? "bg-boutique-secondary/10 opacity-70" : "bg-white"}`}>
      <td className="px-4 py-4">
        <div className="flex items-center">
          <div className="h-10 w-10 bg-gradient-to-br from-boutique-primary to-boutique-accent rounded-full flex items-center justify-center shadow-sm">
            <UserIcon />
          </div>
          <div className="ml-3">
            <div className="text-sm font-semibold text-boutique-textdark">{message.name}</div>
            <div className="text-xs text-boutique-textdark/60 mt-1">
              {message["service-type"] || "General Inquiry"}
            </div>
          </div>
        </div>
      </td>
      <td className="px-4 py-4 hidden md:table-cell">
        <div className="text-sm text-boutique-textdark">{message.email}</div>
      </td>
      <td className="px-4 py-4 hidden lg:table-cell">
        <div className="text-sm text-boutique-textdark">{message.phone}</div>
      </td>
      <td className="px-4 py-4">
        <div className="text-sm text-boutique-textdark line-clamp-2 max-w-xs">
          {message.message}
        </div>
      </td>
      <td className="px-4 py-4 hidden xl:table-cell">
        <div className="text-sm text-boutique-textdark">{formatDate(receivedDate)}</div>
        <div className="text-xs text-boutique-textdark/60">{formatTime(receivedDate)}</div>
      </td>
      <td className="px-4 py-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
          <div className="flex items-center">
            <input
              type="checkbox"
              checked={attended}
              onChange={() => onToggleAttended(message.id, !attended)}
              className="h-4 w-4 text-boutique-primary rounded border-boutique-accent focus:ring-boutique-primary cursor-pointer"
            />
            <span className="ml-2 text-xs text-boutique-textdark/70 hidden sm:inline">Attended</span>
          </div>
          <button 
            onClick={() => onView(message)}
            className="text-boutique-primary hover:text-boutique-highlight text-sm transition-colors px-2 py-1 rounded hover:bg-boutique-secondary/30"
          >
            View
          </button>
          <button 
            onClick={() => onDelete(message.id)}
            className="text-red-600 hover:text-red-700 text-sm transition-colors px-2 py-1 rounded hover:bg-red-50"
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}

MessageRow.propTypes = {
  message: PropTypes.object.isRequired,
  onView: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onToggleAttended: PropTypes.func.isRequired,
};

function MessageModal({ message, onClose }) {
  const receivedDate = new Date(message.createdAt?.seconds * 1000);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-poppins font-bold text-boutique-textdark">
              Message Details
            </h3>
            <button
              onClick={onClose}
              className="text-boutique-textdark/40 hover:text-boutique-textdark/60 transition-colors p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-3 bg-boutique-secondary/20 rounded-lg">
                <label className="block text-xs font-medium text-boutique-textdark/70 mb-1">Name</label>
                <p className="text-boutique-textdark font-medium">{message.name}</p>
              </div>
              <div className="p-3 bg-boutique-secondary/20 rounded-lg">
                <label className="block text-xs font-medium text-boutique-textdark/70 mb-1">Email</label>
                <p className="text-boutique-textdark font-medium">{message.email}</p>
              </div>
              <div className="p-3 bg-boutique-secondary/20 rounded-lg">
                <label className="block text-xs font-medium text-boutique-textdark/70 mb-1">Phone</label>
                <p className="text-boutique-textdark font-medium">{message.phone}</p>
              </div>
              <div className="p-3 bg-boutique-secondary/20 rounded-lg">
                <label className="block text-xs font-medium text-boutique-textdark/70 mb-1">Service Type</label>
                <p className="text-boutique-textdark font-medium">{message["service-type"] || "Not specified"}</p>
              </div>
              <div className="p-3 bg-boutique-secondary/20 rounded-lg">
                <label className="block text-xs font-medium text-boutique-textdark/70 mb-1">Attended</label>
                <p className="text-boutique-textdark font-medium">{message.attended ? "Yes" : "No"}</p>
              </div>
              <div className="p-3 bg-boutique-secondary/20 rounded-lg">
                <label className="block text-xs font-medium text-boutique-textdark/70 mb-1">Received</label>
                <p className="text-boutique-textdark font-medium text-sm">
                  {formatDate(receivedDate)} at {formatTime(receivedDate)}
                </p>
              </div>
            </div>

            <div className="p-3 bg-boutique-secondary/20 rounded-lg">
              <label className="block text-xs font-medium text-boutique-textdark/70 mb-2">Message</label>
              <p className="text-boutique-textdark whitespace-pre-wrap leading-relaxed">
                {message.message}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

MessageModal.propTypes = {
  message: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

// Pagination Component
function Pagination({ currentPage, totalPages, onPageChange }) {
  const pages = [];
  
  // Show limited page numbers for better UX
  const maxVisiblePages = 5;
  let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
  let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
  
  if (endPage - startPage + 1 < maxVisiblePages) {
    startPage = Math.max(1, endPage - maxVisiblePages + 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => onPageChange(i)}
        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
          currentPage === i
            ? 'bg-boutique-primary text-white'
            : 'text-boutique-textdark hover:bg-boutique-secondary/30'
        }`}
      >
        {i}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-between border-t border-boutique-secondary/30 px-4 py-4 sm:px-6">
      <div className="flex justify-between sm:justify-start items-center space-x-2 w-full">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg text-sm font-medium text-boutique-textdark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-boutique-secondary/30 transition-colors"
        >
          Previous
        </button>
        
        <div className="hidden sm:flex space-x-1">
          {pages}
        </div>
        
        <div className="sm:hidden text-sm text-boutique-textdark/70">
          Page {currentPage} of {totalPages}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg text-sm font-medium text-boutique-textdark disabled:opacity-50 disabled:cursor-not-allowed hover:bg-boutique-secondary/30 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [filterServiceType, setFilterServiceType] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    // Query with orderBy to get latest messages first
    const messagesQuery = query(
      collection(db, "contacts"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(
      messagesQuery,
      (snapshot) => {
        const contacts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(contacts);
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching contacts:", err);
        toast.error("Failed to load contacts");
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Logged out successfully!");
      navigate("/admin/login");
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Failed to logout");
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      try {
        await deleteDoc(doc(db, "contacts", id));
        toast.success("Message deleted successfully!");
      } catch (error) {
        console.error("Error deleting message:", error);
        toast.error("Failed to delete message");
      }
    }
  };

  const handleView = (message) => {
    setSelectedMessage(message);
  };

  const closeModal = () => {
    setSelectedMessage(null);
  };

  const handleToggleAttended = async (id, attended) => {
    try {
      const messageDocRef = doc(db, "contacts", id);
      await updateDoc(messageDocRef, { attended });
      toast.success(`Marked as ${attended ? "attended" : "not attended"}`);
    } catch (error) {
      console.error("Error updating attended status:", error);
      toast.error("Failed to update attended status");
    }
  };

  // Filter messages based on service type and date range
  const filteredMessages = messages.filter((m) => {
    const matchesServiceType = !filterServiceType || m["service-type"] === filterServiceType;
    const messageDate = new Date(m.createdAt?.seconds * 1000);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const matchesStartDate = !start || messageDate >= start;
    const matchesEndDate = !end || messageDate <= end;
    return matchesServiceType && matchesStartDate && matchesEndDate;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredMessages.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentMessages = filteredMessages.slice(startIndex, endIndex);

  const uniqueServiceTypes = [...new Set(messages.map((m) => m["service-type"]).filter(Boolean))];
  
  const recentMessagesCount = messages.filter((m) => {
    const messageDate = new Date(m.createdAt?.seconds * 1000);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return messageDate >= weekAgo;
  }).length;

  const pendingMessagesCount = messages.filter(m => !m.attended).length;

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [filterServiceType, startDate, endDate]);

  return (
    <div className="min-h-screen bg-boutique-light-bg font-inter">
      <ToastContainer />
      
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-boutique-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-boutique-primary to-boutique-accent rounded-lg flex items-center justify-center shadow-sm">
                  <span className="text-white font-bold text-lg">CS</span>
                </div>
                <div>
                  <h1 className="text-lg font-poppins font-bold text-boutique-textdark">
                    Creative Stitching
                  </h1>
                  <p className="text-xs text-boutique-textdark/60 -mt-1">Admin Dashboard</p>
                </div>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              <div className="bg-gradient-to-r from-boutique-primary to-boutique-accent text-white px-4 py-1 rounded-full text-sm font-medium">
                {messages.length} Messages
              </div>
              <button
                onClick={handleLogout}
                className="text-boutique-textdark hover:text-boutique-primary transition-colors font-medium"
              >
                Logout
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-boutique-textdark p-2"
              >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-boutique-secondary/30">
              <div className="flex flex-col space-y-4">
                <div className="bg-gradient-to-r from-boutique-primary to-boutique-accent text-white px-4 py-2 rounded-lg text-center">
                  {messages.length} Messages
                </div>
                <button
                  onClick={handleLogout}
                  className="text-boutique-textdark hover:text-boutique-primary transition-colors font-medium text-left"
                >
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-boutique-textdark mb-2">
            Admin Dashboard
          </h1>
          <p className="text-boutique-textdark/70">
            Manage contact messages and customer inquiries
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-gradient-to-br from-boutique-primary to-boutique-accent rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Total Messages</p>
                <p className="text-2xl font-bold font-poppins">{messages.length}</p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <MessageIcon />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-boutique-accent to-boutique-highlight rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Recent (7 days)</p>
                <p className="text-2xl font-bold font-poppins">{recentMessagesCount}</p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <ClockIcon />
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-boutique-highlight to-boutique-primary rounded-xl shadow-sm p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 text-sm">Pending</p>
                <p className="text-2xl font-bold font-poppins">
                  {pendingMessagesCount}
                </p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <UserIcon />
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-sm border border-boutique-secondary/30 p-4 sm:p-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-lg font-poppins font-semibold text-boutique-textdark">
              Contact Messages
            </h2>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <select
                value={filterServiceType}
                onChange={(e) => setFilterServiceType(e.target.value)}
                className="px-3 py-2 border border-boutique-accent/50 rounded-lg text-sm bg-white focus:ring-2 focus:ring-boutique-primary/20 focus:border-boutique-primary"
              >
                <option value="">All Services</option>
                {uniqueServiceTypes.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>

              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="px-3 py-2 border border-boutique-accent/50 rounded-lg text-sm bg-white focus:ring-2 focus:ring-boutique-primary/20 focus:border-boutique-primary"
                placeholder="Start Date"
              />

              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="px-3 py-2 border border-boutique-accent/50 rounded-lg text-sm bg-white focus:ring-2 focus:ring-boutique-primary/20 focus:border-boutique-primary"
                placeholder="End Date"
              />

              <select
                value={itemsPerPage}
                onChange={(e) => {
                  setItemsPerPage(Number(e.target.value));
                  setCurrentPage(1);
                }}
                className="px-3 py-2 border border-boutique-accent/50 rounded-lg text-sm bg-white focus:ring-2 focus:ring-boutique-primary/20 focus:border-boutique-primary"
              >
                <option value="5">5 per page</option>
                <option value="10">10 per page</option>
                <option value="20">20 per page</option>
                <option value="50">50 per page</option>
              </select>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-boutique-textdark/70">
            Showing {Math.min(filteredMessages.length, startIndex + 1)}-{Math.min(endIndex, filteredMessages.length)} of {filteredMessages.length} messages
            {totalPages > 1 && ` • Page ${currentPage} of ${totalPages}`}
          </div>
        </div>

        {/* Messages Table */}
        <div className="bg-white rounded-xl shadow-sm border border-boutique-secondary/30 overflow-hidden">
          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-boutique-primary mx-auto"></div>
              <p className="mt-4 text-boutique-textdark/70">Loading messages...</p>
            </div>
          ) : filteredMessages.length === 0 ? (
            <div className="text-center py-12">
              <MessageIcon />
              <h3 className="mt-2 text-sm font-medium text-boutique-textdark">No messages found</h3>
              <p className="mt-1 text-sm text-boutique-textdark/70">
                {messages.length === 0 ? "No contact messages received yet." : "No messages match your filters."}
              </p>
            </div>
          ) : (
            <>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead className="bg-boutique-secondary/30">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-boutique-textdark uppercase">
                        Contact
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-boutique-textdark uppercase hidden md:table-cell">
                        Email
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-boutique-textdark uppercase hidden lg:table-cell">
                        Phone
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-boutique-textdark uppercase">
                        Message
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-boutique-textdark uppercase hidden xl:table-cell">
                        Date
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-semibold text-boutique-textdark uppercase">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-boutique-secondary/30">
                    {currentMessages.map((message) => (
                      <MessageRow
                        key={message.id}
                        message={message}
                        onView={handleView}
                        onDelete={handleDelete}
                        onToggleAttended={handleToggleAttended}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
              
              {/* Pagination */}
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
      </main>

      {selectedMessage && (
        <MessageModal 
          message={selectedMessage} 
          onClose={closeModal}
        />
      )}
    </div>
  );
}