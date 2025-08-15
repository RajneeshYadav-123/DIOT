const Team = require('../models/Team');

exports.TeamDetails = async (req, res) => {
    try {
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
            team_member4_year
        } = req.body;

        if (!teamname || !Instituename || !teamLeader || !teamLeader_email || !teamLeader_mobile || !teamLeader_branch || !teamLeader_year) {
                return res.status(400).json({
                    success:false,
                    message: "All team leader fields are required" 
                });
        }

     

        const team=await Team.create({
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
            team_member4_year
        })

        res.status(201).json({
            success:true,
            message: "Team registered successfully",
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


