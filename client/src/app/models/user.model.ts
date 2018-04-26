export interface User {
	userId:string;
	userName:string;
    totalMinute: number;
    totalTime?: Date;
    
    checkIn: {
    	note:string;
    	createdDate:Date;
    	modifiedDate:Date;
    }
    checkOut: {
    	note:string;
    	createdDate:Date;
    	modifiedDate:Date;
    }
    
}