import { CommonErrorStructure } from "./Error.type";

export type ResponseObject = {
	message: string;
	status: number;
	data: any;
	errors: CommonErrorStructure[] | null;
};
