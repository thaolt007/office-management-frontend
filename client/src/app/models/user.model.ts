export interface User {
	userId:string;
	userName:string;
    totalMinute: number;
    totalTime?: Date;
    
    checkIn: {
		id: number;
    	note:string;
    	createdDate:Date;
    	modifiedDate:Date;
    }
    checkOut: {
		id: number;
    	note:string;
    	createdDate:Date;
    	modifiedDate:Date;
    }
    
}