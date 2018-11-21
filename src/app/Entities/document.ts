export class Document {
    public Content: File;
    public Doc_Subject: string;
    public DocType_ID: number;
    public Doc_SrialNumber: string;
    public Doc_Date: string;
    public Doc_Remarks: string;
    public Doc_CreatedBy: string;

    /**
     *
     */
    constructor() {
        this.Content = null;
        this.Doc_Subject = "";
        this.DocType_ID = 0;
        this.Doc_SrialNumber = "";
        this.Doc_Date = "";
        this.Doc_Remarks = "";
        this.Doc_CreatedBy = "";
    }
}
