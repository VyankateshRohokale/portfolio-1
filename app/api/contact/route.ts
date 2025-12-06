import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';


export async function POST(request: NextRequest) {
    try {

        const body = await request.json();
        const { name, email, company, budget, whereDidYouHearAboutUs, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required fields.' },
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


            const htmlTemplate2 = `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <p>You have received a new message from the contact form on your website. Here are the details:</p>
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
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Company:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${company || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Budget:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${budget || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Where Did You Hear About Us:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${whereDidYouHearAboutUs || 'N/A'}</td>
                </tr>
                <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;"><strong>Message:</strong></td>
                    <td style="border: 1px solid #ddd; padding: 8px;">${message}</td>
                </tr>
            </table>
            <p style="margin-top: 20px;">Please respond to this inquiry as soon as possible.</p>
            <p>Best regards,<br/>Vyankatesh</p>
        </div>
        `;

            const mailOptions = {
                from: process.env.EMAIL_USER,
                to: 'realpiyush2525@gmail.com',
                subject: `New Contact Form Submission `,
                html: htmlTemplate2,
            };

            await transporter.sendMail(mailOptions);
            success = true
        } catch (error) {
            console.error('Error sending email:', error);
        }

        try {
            const discordPayload = {
                content: null,
                embeds: [
                    {
                        title: "New Contact Form Submission",
                        color: 5814783,
                        fields: [
                            { name: "Name", value: name || 'N/A', inline: true },
                            { name: "Email", value: email || 'N/A', inline: true },
                            { name: "Company", value: company || 'N/A', inline: true },
                            { name: "Budget", value: budget || 'N/A', inline: true },
                            { name: "Where Did You Hear About Us", value: whereDidYouHearAboutUs || 'N/A', inline: true },
                            { name: "Message", value: message || 'N/A', inline: false },
                        ],
                        timestamp: new Date().toISOString(),
                        footer: {
                            text: "byencrypt",
                        },
                    },
                ],
                username: "byencrypt contact",
                avatar_url: "https://byencrypt.com/image_full.jpeg",
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
