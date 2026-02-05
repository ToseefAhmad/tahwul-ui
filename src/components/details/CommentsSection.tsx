import { useState } from 'react';
import { Send } from 'lucide-react';
import type { Comment } from '../../types';

interface CommentsSectionProps {
  comments: Comment[];
}

export function CommentsSection({ comments }: CommentsSectionProps) {
  const [newComment, setNewComment] = useState('');

  const getInitials = (name: string) => {
    return name.split(' ').map((n) => n[0]).join('').toUpperCase().slice(0, 1);
  };

  const getAvatarColor = (name: string) => {
    const colors = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
    const index = name.length % colors.length;
    return colors[index];
  };

  const handlePostComment = () => {
    if (newComment.trim()) {
      console.log('Posting comment:', newComment);
      setNewComment('');
    }
  };

  return (
    <div className="comments-section">
      <h3 className="comments-title">Comments</h3>
      
      <div className="comments-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <div
              className="comment-avatar"
              style={{ backgroundColor: getAvatarColor(comment.author) }}
            >
              {getInitials(comment.author)}
            </div>
            <div className="comment-body">
              <div className="comment-header">
                <span className="comment-author">{comment.author}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <p className="comment-text">{comment.content}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="comment-input-section">
        <textarea
          className="comment-input"
          placeholder="Write a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          rows={4}
        />
        <button className="post-comment-btn" onClick={handlePostComment}>
          <Send size={16} />
          <span>Post Comment</span>
        </button>
      </div>
    </div>
  );
}
