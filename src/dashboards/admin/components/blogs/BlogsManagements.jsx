/* eslint-disable react-hooks/set-state-in-effect */
/* eslint-disable no-unused-vars */
// pages/dashboard/BlogManagement.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Material-UI Icons
import Add from '@mui/icons-material/Add';
import Edit from '@mui/icons-material/Edit';
import Delete from '@mui/icons-material/Delete';
import Search from '@mui/icons-material/Search';
import FilterList from '@mui/icons-material/FilterList';
import Refresh from '@mui/icons-material/Refresh';
import Download from '@mui/icons-material/Download';
import Close from '@mui/icons-material/Close';
import CheckCircle from '@mui/icons-material/CheckCircle';
import Error from '@mui/icons-material/Error';
import Warning from '@mui/icons-material/Warning';
import Info from '@mui/icons-material/Info';
import Visibility from '@mui/icons-material/Visibility';
import Book from '@mui/icons-material/Book';
import Person from '@mui/icons-material/Person';
import CalendarToday from '@mui/icons-material/CalendarToday';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ThumbUp from '@mui/icons-material/ThumbUp';
import Comment from '@mui/icons-material/Comment';
import Share from '@mui/icons-material/Share';
import Category from '@mui/icons-material/Category';
import LocalOffer from '@mui/icons-material/LocalOffer';
import Image from '@mui/icons-material/Image';
import Description from '@mui/icons-material/Description';
import Title from '@mui/icons-material/Title';
import FormatBold from '@mui/icons-material/FormatBold';
import FormatItalic from '@mui/icons-material/FormatItalic';
import FormatUnderlined from '@mui/icons-material/FormatUnderlined';
import FormatListBulleted from '@mui/icons-material/FormatListBulleted';
import FormatListNumbered from '@mui/icons-material/FormatListNumbered';
import Link from '@mui/icons-material/Link';
import Photo from '@mui/icons-material/Photo';
import Code from '@mui/icons-material/Code';
import Preview from '@mui/icons-material/Preview';
import Save from '@mui/icons-material/Save';
import Publish from '@mui/icons-material/Publish';
import Schedule from '@mui/icons-material/Schedule';
import TrendingUp from '@mui/icons-material/TrendingUp';
import { Block } from '@mui/icons-material';

// API Service (simulated)
const blogAPI = {
  // Simulate API calls with dummy data
  getPosts: async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return {
      success: true,
      data: [
        { 
          id: 1, 
          title: '10 Tips for Learning Web Development Faster',
          excerpt: 'Master web development with these proven tips and techniques...',
          content: 'Full content here...',
          author: 'John Smith',
          authorAvatar: '👨‍💻',
          category: 'Web Development',
          tags: ['webdev', 'programming', 'tips'],
          image: '🌐',
          publishedAt: '2024-03-15T10:30:00Z',
          views: 3456,
          likes: 234,
          comments: 56,
          shares: 23,
          status: 'Published',
          featured: true
        },
        { 
          id: 2, 
          title: 'Understanding React Hooks: A Comprehensive Guide',
          excerpt: 'Deep dive into useState, useEffect, useContext and custom hooks...',
          content: 'Full content here...',
          author: 'Sarah Johnson',
          authorAvatar: '👩‍💻',
          category: 'React',
          tags: ['react', 'javascript', 'hooks'],
          image: '⚛️',
          publishedAt: '2024-03-14T14:20:00Z',
          views: 2890,
          likes: 187,
          comments: 42,
          shares: 15,
          status: 'Published',
          featured: true
        },
        { 
          id: 3, 
          title: 'The Future of Artificial Intelligence in Education',
          excerpt: 'How AI is transforming the way we learn and teach...',
          content: 'Full content here...',
          author: 'Michael Chen',
          authorAvatar: '👨‍🔬',
          category: 'Technology',
          tags: ['AI', 'education', 'future'],
          image: '🤖',
          publishedAt: '2024-03-13T09:15:00Z',
          views: 2156,
          likes: 145,
          comments: 38,
          shares: 12,
          status: 'Published',
          featured: false
        },
        { 
          id: 4, 
          title: 'Building a Successful Online Course: Step by Step',
          excerpt: 'From idea to launch - everything you need to know...',
          content: 'Full content here...',
          author: 'Emily Davis',
          authorAvatar: '👩‍🎓',
          category: 'Business',
          tags: ['courses', 'teaching', 'online'],
          image: '📚',
          publishedAt: '2024-03-12T16:45:00Z',
          views: 1876,
          likes: 123,
          comments: 29,
          shares: 34,
          status: 'Published',
          featured: false
        },
        { 
          id: 5, 
          title: 'UX Design Principles Every Developer Should Know',
          excerpt: 'Improve your applications with these UX fundamentals...',
          content: 'Full content here...',
          author: 'Lisa Anderson',
          authorAvatar: '👩‍🎨',
          category: 'Design',
          tags: ['ux', 'design', 'development'],
          image: '🎨',
          publishedAt: '2024-03-11T11:30:00Z',
          views: 1654,
          likes: 98,
          comments: 21,
          shares: 8,
          status: 'Draft',
          featured: false
        },
        { 
          id: 6, 
          title: 'Introduction to Python for Data Science',
          excerpt: 'Start your data science journey with Python...',
          content: 'Full content here...',
          author: 'David Wilson',
          authorAvatar: '👨‍🏫',
          category: 'Data Science',
          tags: ['python', 'datascience', 'analytics'],
          image: '🐍',
          publishedAt: '2024-03-10T13:20:00Z',
          views: 1432,
          likes: 87,
          comments: 19,
          shares: 11,
          status: 'Published',
          featured: false
        },
        { 
          id: 7, 
          title: 'Mastering CSS Grid and Flexbox',
          excerpt: 'Create modern layouts with CSS Grid and Flexbox...',
          content: 'Full content here...',
          author: 'Robert Taylor',
          authorAvatar: '👨‍🎨',
          category: 'CSS',
          tags: ['css', 'flexbox', 'grid'],
          image: '🎯',
          publishedAt: '2024-03-09T08:45:00Z',
          views: 1987,
          likes: 156,
          comments: 34,
          shares: 19,
          status: 'Published',
          featured: true
        },
        { 
          id: 8, 
          title: 'Security Best Practices for Web Applications',
          excerpt: 'Protect your applications from common vulnerabilities...',
          content: 'Full content here...',
          author: 'Jennifer White',
          authorAvatar: '👩‍🔒',
          category: 'Security',
          tags: ['security', 'webdev', 'bestpractices'],
          image: '🔒',
          publishedAt: '2024-03-08T15:10:00Z',
          views: 2134,
          likes: 178,
          comments: 45,
          shares: 27,
          status: 'Archived',
          featured: false
        },
        { 
          id: 9, 
          title: 'Getting Started with Node.js and Express',
          excerpt: 'Build your first backend API with Node.js...',
          content: 'Full content here...',
          author: 'John Smith',
          authorAvatar: '👨‍💻',
          category: 'Backend',
          tags: ['nodejs', 'express', 'backend'],
          image: '🚀',
          publishedAt: '2024-03-07T12:00:00Z',
          views: 2345,
          likes: 167,
          comments: 31,
          shares: 22,
          status: 'Draft',
          featured: false
        },
      ]
    };
  },
  
  createPost: async (postData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Blog post created successfully',
      data: { id: Math.floor(Math.random() * 1000), ...postData }
    };
  },
  
  updatePost: async (id, postData) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Blog post updated successfully',
      data: { id, ...postData }
    };
  },
  
  deletePost: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
      success: true,
      message: 'Blog post deleted successfully'
    };
  },
  
  updatePostStatus: async (id, status) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return {
      success: true,
      message: `Blog post ${status === 'Published' ? 'published' : 'unpublished'} successfully`
    };
  }
};

// Notification Component
const Notification = ({ type, message, onClose }) => {
  const icons = {
    success: <CheckCircle className="text-green-500" />,
    error: <Error className="text-red-500" />,
    warning: <Warning className="text-yellow-500" />,
    info: <Info className="text-blue-500" />
  };

  const colors = {
    success: 'bg-green-50 border-green-200 text-green-800',
    error: 'bg-red-50 border-red-200 text-red-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    info: 'bg-blue-50 border-blue-200 text-blue-800'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      className={`fixed top-4 right-4 z-50 flex items-center p-4 rounded-lg border ${colors[type]} shadow-lg`}
    >
      <div className="mr-3">{icons[type]}</div>
      <p className="mr-8">{message}</p>
      <button onClick={onClose} className="ml-auto">
        <Close className="w-5 h-5" />
      </button>
    </motion.div>
  );
};

// Confirmation Modal
const ConfirmModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md relative z-10"
      >
        <div className="flex items-center justify-center w-16 h-16 mx-auto bg-yellow-100 rounded-full mb-4">
          <Warning className="w-8 h-8 text-yellow-600" />
        </div>
        <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
        <p className="text-gray-600 text-center mb-6">{message}</p>
        <div className="flex space-x-3">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Confirm
          </button>
        </div>
      </motion.div>
    </div>
  );
};

// Blog Post Modal (Create/Edit)
const BlogPostModal = ({ isOpen, onClose, onSubmit, post, mode }) => {
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    category: 'Web Development',
    tags: '',
    image: '',
    status: 'Draft',
    featured: false
  });

  const categories = [
    'Web Development',
    'React',
    'JavaScript',
    'Python',
    'Data Science',
    'Design',
    'Technology',
    'Business',
    'Security',
    'CSS',
    'Backend',
    'Career'
  ];

  useEffect(() => {
    if (post && mode === 'edit') {
      setFormData({
        title: post.title || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        author: post.author || '',
        category: post.category || 'Web Development',
        tags: post.tags ? post.tags.join(', ') : '',
        image: post.image || '',
        status: post.status || 'Draft',
        featured: post.featured || false
      });
    } else {
      setFormData({
        title: '',
        excerpt: '',
        content: '',
        author: '',
        category: 'Web Development',
        tags: '',
        image: '',
        status: 'Draft',
        featured: false
      });
    }
  }, [post, mode, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    // Convert tags string to array
    const submitData = {
      ...formData,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag)
    };
    onSubmit(submitData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">
            {mode === 'create' ? 'Create New Blog Post' : 'Edit Blog Post'}
          </h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Title className="w-4 h-4 inline mr-1" />
              Post Title *
            </label>
            <input
              type="text"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="e.g., 10 Tips for Learning Web Development Faster"
            />
          </div>

          {/* Author and Category */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Person className="w-4 h-4 inline mr-1" />
                Author *
              </label>
              <input
                type="text"
                required
                value={formData.author}
                onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="Author name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Category className="w-4 h-4 inline mr-1" />
                Category *
              </label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Description className="w-4 h-4 inline mr-1" />
              Excerpt *
            </label>
            <textarea
              required
              value={formData.excerpt}
              onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Brief description of the post..."
            />
          </div>

          {/* Content */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Description className="w-4 h-4 inline mr-1" />
              Content *
            </label>
            
            {/* Rich Text Toolbar (Placeholder) */}
            <div className="flex items-center space-x-2 p-2 bg-gray-50 border border-gray-200 rounded-t-lg">
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <FormatBold className="w-4 h-4 text-gray-600" />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <FormatItalic className="w-4 h-4 text-gray-600" />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <FormatUnderlined className="w-4 h-4 text-gray-600" />
              </button>
              <span className="w-px h-6 bg-gray-300"></span>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <FormatListBulleted className="w-4 h-4 text-gray-600" />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <FormatListNumbered className="w-4 h-4 text-gray-600" />
              </button>
              <span className="w-px h-6 bg-gray-300"></span>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <Link className="w-4 h-4 text-gray-600" />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <Photo className="w-4 h-4 text-gray-600" />
              </button>
              <button type="button" className="p-1 hover:bg-gray-200 rounded">
                <Code className="w-4 h-4 text-gray-600" />
              </button>
            </div>
            
            <textarea
              required
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              rows="8"
              className="w-full px-4 py-2 border border-t-0 border-gray-300 rounded-b-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Write your blog post content here..."
            />
          </div>

          {/* Tags and Image */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <LocalOffer className="w-4 h-4 inline mr-1" />
                Tags
              </label>
              <input
                type="text"
                value={formData.tags}
                onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                placeholder="react, javascript, webdev (comma separated)"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Image className="w-4 h-4 inline mr-1" />
                Featured Image
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="Emoji or image URL"
                />
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-2xl">
                  {formData.image || '📝'}
                </div>
              </div>
            </div>
          </div>

          {/* Status and Featured */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status *
              </label>
              <select
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="Draft">Draft</option>
                <option value="Published">Published</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="featured"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                className="w-4 h-4 text-purple-600 rounded focus:ring-purple-500"
              />
              <label htmlFor="featured" className="ml-2 text-sm text-gray-700">
                Featured Post
              </label>
            </div>
          </div>

          {/* Form Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              {mode === 'create' ? 'Create Post' : 'Update Post'}
            </button>
          </div>
        </form>
      </motion.div>
    </div>
  );
};

// Blog Post Details Modal
const BlogPostDetailsModal = ({ isOpen, onClose, post }) => {
  if (!isOpen || !post) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-4xl relative z-10 max-h-[90vh] overflow-y-auto"
      >
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold">Blog Post Details</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <Close />
          </button>
        </div>

        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-start space-x-4">
            <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-4xl">
              {post.image}
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-800">{post.title}</h2>
                <span className={`px-3 py-1 text-sm font-medium rounded-full ${
                  post.status === 'Published' ? 'bg-green-100 text-green-800' :
                  post.status === 'Draft' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {post.status}
                </span>
              </div>
              
              <div className="flex items-center mt-4 space-x-6">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-lg mr-2">
                    {post.authorAvatar}
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Author</p>
                    <p className="font-medium">{post.author}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <CalendarToday className="w-4 h-4 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Published</p>
                    <p className="font-medium">{new Date(post.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Category className="w-4 h-4 text-gray-400 mr-2" />
                  <div>
                    <p className="text-sm text-gray-500">Category</p>
                    <p className="font-medium">{post.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <VisibilityIcon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-blue-600">{post.views}</p>
              <p className="text-xs text-gray-500">Views</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <ThumbUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-green-600">{post.likes}</p>
              <p className="text-xs text-gray-500">Likes</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <Comment className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-purple-600">{post.comments}</p>
              <p className="text-xs text-gray-500">Comments</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-4 text-center">
              <Share className="w-6 h-6 text-orange-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-orange-600">{post.shares}</p>
              <p className="text-xs text-gray-500">Shares</p>
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Excerpt</h4>
            <p className="text-gray-600 bg-gray-50 p-4 rounded-lg">{post.excerpt}</p>
          </div>

          {/* Tags */}
          <div>
            <h4 className="font-medium text-gray-700 mb-2">Tags</h4>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-3 pt-4 border-t">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Close
            </button>
            <button
              onClick={() => window.open('#', '_blank')}
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 flex items-center"
            >
              <Preview className="w-5 h-5 mr-2" />
              Preview Post
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const BlogManagement = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  
  // Modal states
  const [postModal, setPostModal] = useState({ isOpen: false, mode: 'create', post: null });
  const [detailsModal, setDetailsModal] = useState({ isOpen: false, post: null });
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, action: null, postId: null });
  
  // Notification state
  const [notification, setNotification] = useState(null);

  // Fetch posts on component mount
  useEffect(() => {
    fetchPosts();
  }, []);

  // Apply filters when posts or filter criteria change
  useEffect(() => {
    applyFilters();
  }, [posts, searchTerm, categoryFilter, statusFilter]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const response = await blogAPI.getPosts();
      if (response.success) {
        setPosts(response.data);
      }
    } catch (error) {
      showNotification('error', 'Failed to fetch blog posts');
    } finally {
      setLoading(false);
    }
  };

  const applyFilters = () => {
    let filtered = [...posts];
    
    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply category filter
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(post => post.category === categoryFilter);
    }
    
    // Apply status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter(post => post.status === statusFilter);
    }
    
    setFilteredPosts(filtered);
  };

  const showNotification = (type, message) => {
    setNotification({ type, message });
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const handleCreatePost = async (postData) => {
    try {
      const response = await blogAPI.createPost(postData);
      if (response.success) {
        showNotification('success', response.message);
        setPostModal({ isOpen: false, mode: 'create', post: null });
        fetchPosts();
      }
    } catch (error) {
      showNotification('error', 'Failed to create blog post');
    }
  };

  const handleUpdatePost = async (postData) => {
    try {
      const response = await blogAPI.updatePost(postModal.post.id, postData);
      if (response.success) {
        showNotification('success', response.message);
        setPostModal({ isOpen: false, mode: 'create', post: null });
        fetchPosts();
      }
    } catch (error) {
      showNotification('error', 'Failed to update blog post');
    }
  };

  const handleDeletePost = async () => {
    try {
      const response = await blogAPI.deletePost(confirmModal.postId);
      if (response.success) {
        showNotification('success', response.message);
        setConfirmModal({ isOpen: false, action: null, postId: null });
        fetchPosts();
      }
    } catch (error) {
      showNotification('error', 'Failed to delete blog post');
    }
  };

  const handleStatusChange = async (postId, newStatus) => {
    try {
      const response = await blogAPI.updatePostStatus(postId, newStatus);
      if (response.success) {
        showNotification('success', response.message);
        fetchPosts();
      }
    } catch (error) {
      showNotification('error', 'Failed to update post status');
    }
  };

  const handleRefresh = () => {
    fetchPosts();
    showNotification('info', 'Refreshing blog posts...');
  };

  const handleExport = () => {
    const csvContent = convertToCSV(filteredPosts);
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blog_posts_${new Date().toISOString()}.csv`;
    a.click();
    showNotification('success', 'Blog posts exported successfully');
  };

  const convertToCSV = (data) => {
    const headers = ['Title', 'Author', 'Category', 'Status', 'Views', 'Likes', 'Comments', 'Shares', 'Published Date'];
    const rows = data.map(post => [
      post.title,
      post.author,
      post.category,
      post.status,
      post.views,
      post.likes,
      post.comments,
      post.shares,
      new Date(post.publishedAt).toLocaleDateString()
    ]);
    
    return [headers, ...rows]
      .map(row => row.join(','))
      .join('\n');
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Published': return 'bg-green-100 text-green-800';
      case 'Draft': return 'bg-yellow-100 text-yellow-800';
      case 'Archived': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  // Get unique categories for filter
  const categories = ['All', ...new Set(posts.map(p => p.category))];
  const statuses = ['All', 'Published', 'Draft', 'Archived'];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-6 p-6"
    >
      {/* Notification */}
      {notification && (
        <Notification
          type={notification.type}
          message={notification.message}
          onClose={() => setNotification(null)}
        />
      )}

      {/* Modals */}
      <BlogPostModal
        isOpen={postModal.isOpen}
        onClose={() => setPostModal({ isOpen: false, mode: 'create', post: null })}
        onSubmit={postModal.mode === 'create' ? handleCreatePost : handleUpdatePost}
        post={postModal.post}
        mode={postModal.mode}
      />

      <BlogPostDetailsModal
        isOpen={detailsModal.isOpen}
        onClose={() => setDetailsModal({ isOpen: false, post: null })}
        post={detailsModal.post}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, action: null, postId: null })}
        onConfirm={handleDeletePost}
        title="Delete Blog Post"
        message="Are you sure you want to delete this blog post? This action cannot be undone."
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 flex items-center">
            <Book className="mr-3 text-purple-600" />
            Blog Management
          </h1>
          <p className="text-gray-500 mt-1">Manage your blog posts, content, and publications</p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => setPostModal({ isOpen: true, mode: 'create', post: null })}
            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          >
            <Add className="w-5 h-5 mr-2" />
            New Post
          </button>
          <button
            onClick={handleRefresh}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Refresh className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={handleExport}
            className="p-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
          >
            <Download className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-5 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Posts</p>
              <p className="text-2xl font-bold text-gray-800">{posts.length}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
              <Book className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Published</p>
              <p className="text-2xl font-bold text-gray-800">
                {posts.filter(p => p.status === 'Published').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Drafts</p>
              <p className="text-2xl font-bold text-gray-800">
                {posts.filter(p => p.status === 'Draft').length}
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
              <Edit className="w-6 h-6 text-yellow-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Views</p>
              <p className="text-2xl font-bold text-gray-800">
                {posts.reduce((acc, p) => acc + p.views, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <VisibilityIcon className="w-6 h-6 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Engagement</p>
              <p className="text-2xl font-bold text-gray-800">
                {posts.reduce((acc, p) => acc + p.likes + p.comments, 0).toLocaleString()}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
              <ThumbUp className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Filters */}
      <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-6">
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search posts by title, author, or excerpt..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>

          {/* Status Filter */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="appearance-none bg-white border border-gray-200 rounded-lg pl-4 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
            >
              {statuses.map(status => (
                <option key={status} value={status}>{status}</option>
              ))}
            </select>
            <FilterList className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" />
          </div>
        </div>
      </motion.div>

      {/* Blog Posts Table */}
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Post</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Author</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Category</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Status</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Published</th>
                  <th className="text-left py-4 px-6 text-sm font-medium text-gray-500">Stats</th>
                  <th className="text-right py-4 px-6 text-sm font-medium text-gray-500">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-xl mr-3">
                          {post.image}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{post.title}</p>
                          <p className="text-xs text-gray-400">{post.excerpt.substring(0, 50)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-sm mr-2">
                          {post.authorAvatar}
                        </div>
                        <span className="text-sm text-gray-600">{post.author}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <span className="text-sm text-gray-600">{post.category}</span>
                    </td>
                    <td className="py-4 px-6">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(post.status)}`}>
                        {post.status}
                      </span>
                      {post.featured && (
                        <span className="ml-2 px-2 py-1 text-xs font-medium bg-yellow-100 text-yellow-800 rounded-full">
                          Featured
                        </span>
                      )}
                    </td>
                    <td className="py-4 px-6">
                      <p className="text-sm text-gray-600">{new Date(post.publishedAt).toLocaleDateString()}</p>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center space-x-3">
                        <span className="flex items-center text-xs text-gray-500">
                          <VisibilityIcon className="w-3 h-3 mr-1" />
                          {post.views}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <ThumbUp className="w-3 h-3 mr-1" />
                          {post.likes}
                        </span>
                        <span className="flex items-center text-xs text-gray-500">
                          <Comment className="w-3 h-3 mr-1" />
                          {post.comments}
                        </span>
                      </div>
                    </td>
                    <td className="py-4 px-6">
                      <div className="flex items-center justify-end space-x-2">
                        <button
                          onClick={() => setDetailsModal({ isOpen: true, post })}
                          className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                          title="View Details"
                        >
                          <Visibility className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => setPostModal({ isOpen: true, mode: 'edit', post })}
                          className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                          title="Edit Post"
                        >
                          <Edit className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleStatusChange(post.id, post.status === 'Published' ? 'Draft' : 'Published')}
                          className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                          title={post.status === 'Published' ? 'Unpublish' : 'Publish'}
                        >
                          {post.status === 'Published' ? <Block className="w-5 h-5" /> : <CheckCircle className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => setConfirmModal({ isOpen: true, action: 'delete', postId: post.id })}
                          className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                          title="Delete Post"
                        >
                          <Delete className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <Book className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500">No blog posts found matching your criteria</p>
                <button
                  onClick={() => {
                    setSearchTerm('');
                    setCategoryFilter('All');
                    setStatusFilter('All');
                  }}
                  className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* Recent Activity Summary */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <TrendingUp className="mr-2 text-purple-600" />
            Popular Posts This Week
          </h3>
          <div className="space-y-4">
            {posts.sort((a, b) => b.views - a.views).slice(0, 5).map((post, index) => (
              <div key={post.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="w-6 text-gray-400 font-medium">#{index + 1}</span>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{post.title}</p>
                    <p className="text-xs text-gray-400">{post.views.toLocaleString()} views</p>
                  </div>
                </div>
                <span className="text-sm text-purple-600">{post.category}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <Schedule className="mr-2 text-purple-600" />
            Publishing Schedule
          </h3>
          <div className="space-y-4">
            {posts.filter(p => p.status === 'Draft').slice(0, 5).map((post) => (
              <div key={post.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-lg">
                    {post.image}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium text-gray-800">{post.title}</p>
                    <p className="text-xs text-gray-400">Ready for review</p>
                  </div>
                </div>
                <button
                  onClick={() => handleStatusChange(post.id, 'Published')}
                  className="px-3 py-1 bg-purple-100 text-purple-600 rounded-lg text-sm hover:bg-purple-200"
                >
                  Publish
                </button>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

