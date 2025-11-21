import { useState, useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase";
import { useNavigate, Link } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterServiceType, setFilterServiceType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "contacts"), (snapshot) => {
      const contacts = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(contacts);
      setLoading(false);
    }, (err) => {
      console.error("Error fetching contacts:", err);
      setError("Failed to load contacts");
      setLoading(false);
    });

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
    try {
      await deleteDoc(doc(db, "contacts", id));
      toast.success("Message deleted successfully!");
    } catch (error) {
      console.error("Error deleting message:", error);
      toast.error("Failed to delete message");
    }
  };

  const handleView = (message) => {
    setSelectedMessage(message);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMessage(null);
  };

  const filteredMessages = messages.filter(m => {
    const matchesServiceType = !filterServiceType || m["service-type"] === filterServiceType;
    const messageDate = new Date(m.createdAt?.seconds * 1000);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const matchesStartDate = !start || messageDate >= start;
    const matchesEndDate = !end || messageDate <= end;
    return matchesServiceType && matchesStartDate && matchesEndDate;
  });

  const uniqueServiceTypes = [...new Set(messages.map(m => m["service-type"]).filter(Boolean))];

  return (
    <div className="min-h-screen bg-white">
      <ToastContainer />
      {/* Top Navigation Bar */}
      <nav className="bg-boutique-secondary shadow-lg border-b border-boutique-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">CS</span>
              </div>
              <div>
                <h1 className="text-xl font-heading font-bold text-secondary-700">
                  Creative Stitching
                </h1>
                <p className="text-xs text-secondary-500 -mt-1">Boutique</p>
              </div>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/" className="text-boutique-textdark hover:text-boutique-primary font-medium transition-colors duration-300">
                Home
              </Link>
              <Link to="/about" className="text-boutique-textdark hover:text-boutique-primary font-medium transition-colors duration-300">
                About
              </Link>
              <Link to="/services" className="text-boutique-textdark hover:text-boutique-primary font-medium transition-colors duration-300">
                Services
              </Link>
              <Link to="/contact" className="text-boutique-textdark hover:text-boutique-primary font-medium transition-colors duration-300">
                Contact
              </Link>
              <button
                onClick={handleLogout}
                className="text-boutique-textdark hover:text-boutique-primary font-medium transition-colors duration-300"
              >
                Logout
              </button>
            </div>

            {/* Message Count Badge */}
            <div className="flex items-center">
              <div className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {messages.length} Messages
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* Dashboard Header */}
        <div className="bg-white rounded-2xl shadow-xl border border-boutique-secondary/20 p-6 mb-8">
          <div className="text-center">
            <h1 className="text-3xl font-poppins font-bold text-boutique-textdark mb-2">Admin Dashboard</h1>
            <p className="text-boutique-textdark/70 font-inter">Manage contact messages and customer inquiries</p>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-boutique-primary to-boutique-accent rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 font-inter">Total Messages</p>
                <p className="text-3xl font-bold font-poppins">{messages.length}</p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-boutique-accent to-boutique-highlight rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 font-inter">Recent Messages</p>
                <p className="text-3xl font-bold font-poppins">
                  {messages.filter(m => {
                    const messageDate = new Date(m.createdAt?.seconds * 1000);
                    const weekAgo = new Date();
                    weekAgo.setDate(weekAgo.getDate() - 7);
                    return messageDate >= weekAgo;
                  }).length}
                </p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-boutique-highlight to-boutique-primary rounded-2xl shadow-xl p-6 text-white">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white/80 font-inter">Avg. Response Time</p>
                <p className="text-3xl font-bold font-poppins">2.4h</p>
              </div>
              <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Messages List */}
        <div className="bg-white rounded-2xl shadow-xl border border-boutique-secondary/20 overflow-hidden">
          <div className="px-6 py-5 border-b border-boutique-secondary/20 bg-gradient-to-r from-gray-50 to-white">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-poppins font-semibold text-boutique-textdark">Contact Messages</h2>
              <div className="flex items-center space-x-4">
                <select
                  value={filterServiceType}
                  onChange={(e) => setFilterServiceType(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                >
                  <option value="">All Service Types</option>
                  {uniqueServiceTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                  placeholder="Start Date"
                />
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-md text-sm bg-white"
                  placeholder="End Date"
                />
                <div className="flex items-center space-x-2 text-sm text-boutique-textdark/70">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  <span>{filteredMessages.length} total</span>
                </div>
              </div>
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-boutique-primary mx-auto"></div>
              <p className="mt-4 text-boutique-textdark/70 font-inter">Loading messages...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h3 className="mt-2 text-sm font-inter font-medium text-boutique-textdark">Error loading messages</h3>
              <p className="mt-1 text-sm text-boutique-textdark/70 font-inter">{error}</p>
            </div>
          ) : messages.length === 0 ? (
            <div className="text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-5.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
              <h3 className="mt-2 text-sm font-inter font-medium text-boutique-textdark">No messages</h3>
              <p className="mt-1 text-sm text-boutique-textdark/70 font-inter">No contact messages received yet.</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <span>Name</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <span>Email</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span>Phone</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <span>Message Preview</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span>Received Date</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      <div className="flex items-center space-x-2">
                        <svg className="h-4 w-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span>Actions</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredMessages.map((m) => (
                    <tr key={m.id}>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                            <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-semibold text-gray-900">{m.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{m.email}</div>
                        <div className="text-xs text-gray-500">Email</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{m.phone}</div>
                        <div className="text-xs text-gray-500">Phone</div>
                      </td>
                      <td className="px-6 py-5 max-w-xs">
                        <div className="text-sm text-gray-900 line-clamp-2 leading-relaxed">{m.message}</div>
                        <div className="text-xs text-gray-500 mt-1">Message</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{new Date(m.createdAt?.seconds * 1000).toLocaleDateString()}</div>
                        <div className="text-sm text-gray-500">{new Date(m.createdAt?.seconds * 1000).toLocaleTimeString()}</div>
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-medium">
                        <div className="flex flex-col sm:flex-row gap-2">
                          <button
                            onClick={() => handleView(m)}
                            className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                            View
                          </button>
                          <button
                            onClick={() => handleDelete(m.id)}
                            className="bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                          >
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                            </svg>
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Modal for Viewing Message */}
      {isModalOpen && selectedMessage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-modal-slide-in">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-poppins font-bold text-boutique-textdark">Contact Message Details</h3>
                <button
                  onClick={closeModal}
                  className="text-boutique-textdark/40 hover:text-boutique-textdark/60 transition-all duration-300 hover:bg-gray-100 rounded-full p-2 transform hover:scale-110"
                >
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-inter font-medium text-boutique-textdark/70 mb-2">Name</label>
                    <div className="flex items-center space-x-3 p-4 bg-boutique-secondary/10 rounded-xl border border-boutique-secondary/20">
                      <div className="h-12 w-12 bg-gradient-to-r from-boutique-primary to-boutique-accent rounded-full flex items-center justify-center">
                        <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <span className="text-boutique-textdark font-inter font-medium">{selectedMessage.name}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-boutique-textdark/70 mb-2">Email</label>
                    <div className="flex items-center space-x-3 p-4 bg-boutique-secondary/10 rounded-xl border border-boutique-secondary/20">
                      <svg className="h-6 w-6 text-boutique-textdark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-boutique-textdark font-inter">{selectedMessage.email}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-boutique-textdark/70 mb-2">Phone</label>
                    <div className="flex items-center space-x-3 p-4 bg-boutique-secondary/10 rounded-xl border border-boutique-secondary/20">
                      <svg className="h-6 w-6 text-boutique-textdark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-boutique-textdark font-inter">{selectedMessage.phone}</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-inter font-medium text-boutique-textdark/70 mb-2">Service Type</label>
                    <div className="flex items-center space-x-3 p-4 bg-boutique-secondary/10 rounded-xl border border-boutique-secondary/20">
                      <svg className="h-6 w-6 text-boutique-textdark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                      <span className="text-boutique-textdark font-inter">{selectedMessage["service-type"] || "Not specified"}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-inter font-medium text-boutique-textdark/70 mb-2">Message</label>
                  <div className="p-6 bg-boutique-secondary/10 rounded-xl border border-boutique-secondary/20">
                    <p className="text-boutique-textdark font-inter whitespace-pre-wrap leading-relaxed">{selectedMessage.message}</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-inter font-medium text-boutique-textdark/70 mb-2">Received Date</label>
                  <div className="flex items-center space-x-3 p-4 bg-boutique-secondary/10 rounded-xl border border-boutique-secondary/20">
                    <svg className="h-6 w-6 text-boutique-textdark/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="text-boutique-textdark font-inter">
                      {new Date(selectedMessage.createdAt?.seconds * 1000).toLocaleDateString()} at {new Date(selectedMessage.createdAt?.seconds * 1000).toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={closeModal}
                  className="px-8 py-3 bg-boutique-highlight hover:bg-boutique-primary text-white font-inter font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
