export interface BookingRequest {
    id?: string;
    product?: string;
    owner?: string;
    loaner?: string;
    status?: string;
    isValidate?:string;
    dtStatus?: string;
    dtBkReqStart?: string
    dtBkReqEnd?: string
    dtBkingStart?: string
    dtBkingEnd?: string
}
