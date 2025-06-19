export interface User {
 _id?: string; // ID generado por Mongo

 name: string;
 email: string;
 password: string;

 username?: string;
 bio?: string;
 avatars?: {
  url: string
  active: boolean
  uploadedAt?: Date
 }[]


 followers?: string[]; // IDs de usuarios
 following?: string[];

 posts?: string[];     // IDs de publicaciones
 likes?: string[];     // IDs de publicaciones o comentarios
 comments?: string[];  // IDs de comentarios
 bookmarks?: string[]; // IDs guardados (posts, etc.)
 stories?: string[];   // IDs de historias

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