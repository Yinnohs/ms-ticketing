import mongoose, { Document, Model } from "mongoose";
import { hashPassword } from "../utils";

export interface IUser {
	email: string;
	password: string;
	createdAt: Date;
	updatedAt: Date;
}

interface UserBaseDocument extends IUser, Document {}

export interface UserCreateAttributes {
	email: string;
	password: string;
}

export type UserDocument = UserBaseDocument;

export interface UserModel extends Model<IUser> {
	build(attributes: UserCreateAttributes): IUser;
}

const UserSchema = new mongoose.Schema<UserDocument, UserModel>({
	email: {
		type: String,
		require: true,
		unique: true,
		trim: true,
	},
	password: {
		type: String,
		require: true,
	},
});

UserSchema.statics.build = (attributes: UserCreateAttributes) => {
	return new User(attributes);
};

UserSchema.methods.findByEmail = function (email: string) {};

UserSchema.pre<UserDocument>("save", async function (next) {
	if (this.isModified("password")) {
		this.password = await hashPassword(this.password);
	}
});

const User = mongoose.model<UserDocument, UserModel>("User", UserSchema);

export { User };
