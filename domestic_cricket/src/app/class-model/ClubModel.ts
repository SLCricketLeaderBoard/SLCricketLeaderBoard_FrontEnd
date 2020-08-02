import { ManagerModel } from "./ManagerModel";

export class ClubModel {
  constructor(
    public clubId: Number,
    public clubName: String,
    public address: String,
    public email: String,
    public contactNumber: String,
    public regDate: Date,
    public status: Number,
    public clubLogo: String,
    public managerId: ManagerModel
  ) { }
}
