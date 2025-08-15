const Team = require('../models/Team');
const cloudinary=require('cloudinary').v2;
const mongoose=require('mongoose');
const mailSender = require('../utils/mailsender');


function isfiletypesupported(type, supportedTypes) {
    return supportedTypes.includes(type);
}


async function uploadfilecloudinary(file, folder, quality) {
    const options = { folder };
    if (quality) {
        options.quality = quality;
    }
    options.resource_type = "auto";
    return await cloudinary.uploader.upload(file.tempFilePath, options);
}

exports.TeamDetails = async (req, res) => {
    try {
        console.log("Form data:", req.body);
        console.log("File uploaded:", req.files);

        const {
            teamname,
            Instituename,
            teamLeader,
            teamLeader_email,
            teamLeader_mobile,
            teamLeader_branch,
            teamLeader_year,
            team_member1_name,
            team_member1_email,
            team_member1_mob,
            team_member1_branch,
            team_member1_year,
            team_member2_name,
            team_member2_email,
            team_member2_mob,
            team_member2_branch,
            team_member2_year,
            team_member3_name,
            team_member3_email,
            team_member3_mob,
            team_member3_branch,
            team_member3_year,
            team_member4_name,
            team_member4_email,
            team_member4_mob,
            team_member4_branch,
            team_member4_year,
            tranjectionId,
        } = req.body;

        const uploadedImage = req.files.imagefile;
        console.log(uploadedImage);

        if (!teamname || !Instituename || !teamLeader || !teamLeader_email || !teamLeader_mobile || !teamLeader_branch || !teamLeader_year || !tranjectionId) {
            return res.status(400).json({
                success:false,
                message: "All team leader fields are required" 
            });
        }

        const supportedFiles = ["jpeg", "jpg", "png"];
        const filetype = uploadedImage.name.split('.').pop().toLowerCase();
        if (!isfiletypesupported(filetype, supportedFiles)) {
            return res.status(400).json({
                success: false,
                message: "File format not supported",
            });
        }

        const response = await uploadfilecloudinary(uploadedImage, "uploadnew");
        console.log(response);

        const team = await Team.create({
            teamname,
            Instituename,
            teamLeader,
            teamLeader_email,
            teamLeader_mobile,
            teamLeader_branch,
            teamLeader_year,
            team_member1_name,
            team_member1_email,
            team_member1_mob,
            team_member1_branch,
            team_member1_year,
            team_member2_name,
            team_member2_email,
            team_member2_mob,
            team_member2_branch,
            team_member2_year,
            team_member3_name,
            team_member3_email,
            team_member3_mob,
            team_member3_branch,
            team_member3_year,
            team_member4_name,
            team_member4_email,
            team_member4_mob,
            team_member4_branch,
            team_member4_year,
            image_url: response.secure_url,
            tranjectionId
        });


        const allEmails = [
            teamLeader_email,
            team_member1_email,
            team_member2_email,
            team_member3_email,
            team_member4_email
        ].filter(email => email); 

        await mailSender(
            allEmails.join(","),
            "🎉 Team Registration Successful",
            registrationEmailTemplate(teamname, Instituename)
        );

        res.status(201).json({
            success:true,
            message: "Team registered successfully and emails sent",
            data: team
        });

    } catch (error) {
        res.status(500).json({
            message: "Error registering team",
            error: error.message
        });
    }
};


exports.getTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        if(!teams){
            return res.status(404).json({
                success:false,
                message:"Teams data are not fetched"
            })
        }
        res.status(200).json({
            message: "Teams fetched successfully",
            data: teams
        });
    } 
    catch (error) {
        res.status(500).json({
            message: "Error fetching teams",
            error: error.message
        });
    }
};

function registrationEmailTemplate(teamname, Instituename) {
    return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; background: #f9f9f9; padding: 20px; border-radius: 10px;">
        <h2 style="color: #4CAF50; text-align: center;">🎉 Registration Successful!</h2>
        <p style="font-size: 16px; color: #333;">
            Hello,
        </p>
        <p style="font-size: 16px; color: #333;">
            Your team <b>${teamname}</b> from <b>${Instituename}</b> has been successfully registered for the event.
        </p>
        <p style="font-size: 16px; color: #333;">
            Get ready to showcase your talent! We will share more details soon.
        </p>
        <hr style="border: none; border-top: 1px solid #ddd;">
        <p style="font-size: 14px; color: #777; text-align: center;">
            Regards,<br>
            Rajneesh Event Team
        </p>
    </div>
    `;
}


