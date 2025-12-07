import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// {
//     name: '',
//     email: '',
//     phone: '',
//     resumeUrl: '',
//     coverLetter: '',
//     portfolio: '',
//     linkedin: '',
//     github: '',
//     jobTitle: jobTitle || '',
//     department: department || '',
//     location: location || '',
//     type: type || '',
//     level: level || '',
//     description: description || '',
//     other: '',
//   }

export async function POST(request: NextRequest) {
    try {

        const body = await request.json();
        const { name, email, phone, resumeUrl, coverLetter, portfolio, linkedin, github, jobTitle, department, location, type, level, description, other } = body;

        if (!name || !email || !resumeUrl) {
            return NextResponse.json(
                { error: 'Name, email, and resume_url are required fields.' },
                { status: 400 }
            );
        }
        let success = false
        try {
            const transporter = nodemailer.createTransport({
                host: process.env.EMAIL_HOST,
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL_USER,
                    pass: process.env.EMAIL_PASS,
                },
            });


        //     const htmlTemplate2 = `
        // <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        //     <p>You have received a new message from the contact form on your website. Here are the details:</p>
        //     <table style="width: 100%; border-collapse: collapse;">
        //         <tr>
        //             <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name:</strong></td>
        //             <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
        //         </tr>
        //         <tr>
        //             <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email:</strong></td>
        //             <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
        //         </tr>
        //         <tr>
        //             <td style="border: 1px solid #ddd; padding: 8px;"><strong>Company:</strong></td>
        //             <td style="border: 1px solid #ddd; padding: 8px;">${company || 'N/A'}</td>
        //         </tr>
        //         <tr>
        //             <td style="border: 1px solid #ddd; padding: 8px;"><strong>Budget:</strong></td>
        //             <td style="border: 1px solid #ddd; padding: 8px;">${budget || 'N/A'}</td>
        //         </tr>
        //         <tr>
        //             <td style="border: 1px solid #ddd; padding: 8px;"><strong>Where Did You Hear About Us:</strong></td>
        //             <td style="border: 1px solid #ddd; padding: 8px;">${whereDidYouHearAboutUs || 'N/A'}</td>
        //         </tr>
        //         <tr>
        //             <td style="border: 1px solid #ddd; padding: 8px;"><strong>Message:</strong></td>
        //             <td style="border: 1px solid #ddd; padding: 8px;">${message}</td>
        //         </tr>
        //     </table>
        //     <p style="margin-top: 20px;">Please respond to this inquiry as soon as possible.</p>
        //     <p>Best regards,<br/>Team Vyankatesh</p>
        // </div>
        // `;

            const htmlTemplate2 = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <p>You have received a new job application. Here are the details:</p>
            <table style="width: 100%; border-collapse: collapse;">
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Name:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${name}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Email:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${email}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Phone:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${phone || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Resume URL:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;"><a href="${resumeUrl}">${resumeUrl}</a></td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Cover Letter:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${coverLetter || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Portfolio:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${portfolio || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>LinkedIn:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${linkedin || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>GitHub:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${github || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Job Title:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${jobTitle || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Department:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${department || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Location:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${location || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Type:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${type || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Level:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${level || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Description:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${description || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Other:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${other || 'N/A'}</td>
                </tr>
            </table>
            <p style="margin-top: 20px;">Please review this application at your earliest convenience.</p>
            <p>Best regards,<br/>Team Vyankatesh</p>
        </div>
`


            const mailOptions = {
                from: `"Vyankatesh careers" <careers@${process.env.EMAIL_FROM}>`,
                to: process.env.CONTACT_RECEIVER,
                subject: `New Job Application for ${jobTitle || 'a position'}`,
                html: htmlTemplate2,
            };

            await transporter.sendMail(mailOptions);
            success = true

            // send an auto-response email to the user
            const autoResponseOptions = {
                from: `"Vyankatesh careers" <careers@${process.env.EMAIL_FROM}>`,
                to: email,
                subject: 'Thank you for applying to Vyankatesh',
                html: `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                <p>Dear ${name},</p>
                <p>Thank you for showing interest in joining Vyankatesh. We have received your application for the position of ${jobTitle || 'a position'} and our team will review it shortly. If your skills and experience match our requirements, we will reach out to you for the next steps in the hiring process.</p>
                <p>We appreciate the time and effort you put into your application and look forward to potentially working together.</p>
                <p>Best regards,<br/>Team Vyankatesh</p>
            </div>
            `,
            };
            await transporter.sendMail(autoResponseOptions);
        } catch (error) {
            console.error('Error sending email:', error);
        }

        try {
            const discordPayload = {
                content: null,
                embeds: [
                    {
                        title: "New Job Application Received",
                        color: 5814783,
                        fields: [
                            { name: "Name", value: name || 'N/A', inline: true },
                            { name: "Email", value: email || 'N/A', inline: true },
                            { name: "Phone", value: phone || 'N/A', inline: true },
                            { name: "Job Title", value: jobTitle || 'N/A', inline: true },
                            { name: "Department", value: department || 'N/A', inline: true },
                            { name: "Location", value: location || 'N/A', inline: true },
                            { name: "Type", value: type || 'N/A', inline: true },
                            { name: "Level", value: level || 'N/A', inline: true },
                            { name: "Resume URL", value: resumeUrl || 'N/A', inline: false },
                            { name: "Cover Letter", value: coverLetter || 'N/A', inline: false },
                            { name: "Portfolio", value: portfolio || 'N/A', inline: false },
                            { name: "LinkedIn", value: linkedin || 'N/A', inline: false },
                            { name: "GitHub", value: github || 'N/A', inline: false },
                            { name: "Description", value: description || 'N/A', inline: false },
                            { name: "Other", value: other || 'N/A', inline: false },

                        ],
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: "Vyankatesh",
                        },
                    },
                ],
                username: "Vyankatesh careers",
                avatar_url: "https://vyankatesh.dev/image_full.jpeg",
            };
            await fetch(process.env.DISCORD_WEBHOOK_URL!, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(discordPayload),
            });
            success = true
        } catch (error) {
            console.error('Error sending Discord notification:', error);
        }

        if (!success) {
            return NextResponse.json(
                { error: 'Failed to send your message. Please try again later.' },
                { status: 500 }
            );
        }

        return NextResponse.json(
            { success: true, message: 'Your message has been sent successfully.' },
            { status: 200 }
        );

    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return NextResponse.json(
            { error: 'An internal server error occurred.' },
            { status: 500 }
        );
    }
}
