import multer from 'multer';
import nodemailer from 'nodemailer';

const upload = multer();

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: 'deepakkumardeepak081@gmail.com',
        pass: 'fojw wpzi fndt euiz',
    },
});

const sendEmail = async (message, files) => {
    const tableContent = `
    <div style="padding: 30px; border-style: solid; border-color: #f60; border-width: 1px;">
    <div style="width: 100%; height: 200px; margin-bottom: 0px;">
    <img
    style="width: 400px; height: 100px;"
              src='https://www.piemultilingual.com/enquiryform/img/logo.png'               
            
            />
            <p style='color:#000; line-height: 25px;'>Dear Admin,
    <br/>
    You have a new enquiry .
    <br/>
    Please see details:</p>
    </div>
    <table border='1'>
    <tr>
        <td>Name</td>
        <td style="">${message.name}</td>
    </tr>
    <tr>
        <td>Email</td>
        <td>${message.email}</td>
    </tr>
    <tr>
        <td>Phone</td>
        <td>${(message.phone!=undefined || message.phone!=null)?message.phone:""}</td>
    </tr>
    <tr>
        <td>Country</td>
        <td>${message.country}</td>
    </tr>
    <tr>
        <td>IP</td>
        <td>${message.IP}</td>
    </tr>
    <tr>
        <td>URL</td>
        <td>${message.url}</td>
    </tr>
    <tr>
        <td>Message</td>
        <td>${(message.message!=undefined || message.message!=null)?message.message:""}</td>
    </tr>
    <tr>
        <td>Date</td>
        <td>${message.date}</td>
    </tr>
    <tr>
        <td>role</td>
        <td>${(message.role!=undefined || message.role!=null)?message.role:""}</td>
    </tr>
</table>
<p style='color:#000;  line-height: 25px;'>Thanking You
<br/>
Pie Multilangual Services</p>

    </div>


`;
    const mailOptions = {
        from: 'deepakkumardeepak081@gmail.com',
        to: 'dewshikhaa@gmail.com',
        subject: 'New Form Submission',
        html: `
            
            ${tableContent}
        `,
        attachments: files.map((file) => ({
            filename: file.originalname,
            content: file.buffer,
        })),
    };

    try {
        await transporter.sendMail(mailOptions);
        return { success: true, message: 'Email sent successfully!' };
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Error sending email. Please try again later.');
    }
};


export const config = {
    api: {
        bodyParser: false, // Disable default bodyParser
    },
};

const handler = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).end();
    }

    try {
        upload.any()(req, res, async (err) => {
            if (err) {
                console.error('Error uploading files:', err);
                return res.status(500).json({ success: false, message: 'Error uploading files.' });
            }
            const data = req.body;
            if (!data) {
                return res.status(400).json({ success: false, message: 'all fields are empty' });
            }

            const files = req.files || [];

            const emailResult = await sendEmail(data, files);

            return res.status(emailResult.success ? 200 : 500).json(emailResult);
        });
    } catch (error) {
        console.error('Error processing form submission:', error);
        return res.status(500).json({ success: false, message: 'Error processing form submission.' });
    }
};

export default handler;
