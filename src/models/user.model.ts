import mongoose from 'mongoose';

export interface User {
  _id?: string; // ID generado por Mongo

  name: string;
  email: string;
  password: string;

  username?: string;
  bio?: string;
  avatars?: {
    url: string;
    active: boolean;
    uploadedAt?: Date;
  }[];

  followers?: string[]; // IDs de usuarios
  following?: string[];

  posts?: string[]; // IDs de publicaciones
  likes?: string[]; // IDs de publicaciones o comentarios
  comments?: string[]; // IDs de comentarios
  bookmarks?: string[]; // IDs guardados (posts, etc.)
  stories?: string[]; // IDs de historias

  isVerified?: boolean;
  isAdmin?: boolean;
  isBanned?: {
    isBanned: boolean;
    bannedBy?: string; // ID del administrador que lo baneo
    reason?: string;
    bannedAt?: Date;
    expiresAt?: Date; // Si es temporal
  };
  isPrivate?: boolean;
  isOnline?: boolean;

  createdAt: Date;
  updatedAt?: Date;
}

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    bio: { type: String },
    avatars: [
      {
        url: String,
        active: Boolean,
        uploadedAt: Date,
      },
    ],
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    isVerified: { type: Boolean, default: false },
    isAdmin: { type: Boolean, default: false },
    isBanned: {
      status: { type: Boolean, default: false },
      reason: String,
      bannedAt: Date,
    },
    isPrivate: { type: Boolean, default: false },
    isOnline: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const UserModel = mongoose.model<User & mongoose.Document>('User', UserSchema);

export default UserModel;