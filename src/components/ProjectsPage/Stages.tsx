import React from "react";
import { useSelector } from "react-redux";
import { Button, Typography } from "@mui/material";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ChecklistIcon from "@mui/icons-material/Checklist";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CommentIcon from "@mui/icons-material/Comment";
import AttachFileIcon from "@mui/icons-material/AttachFile";

const Stages = () => {
    const selectTasksByStages = useSelector((state) =>
        state.projects[0].stages.map((stage) => {
            return {
                ...stage,
                list: state.projects[0].list.filter((task) => task.stageId === stage.id),
            };
        })
    );

    console.log(selectTasksByStages);

    return (
        <Box sx={{ display: "flex", width: "100%", justifyContent: "space-between" }}>
            {selectTasksByStages.map((tasksByStage) => (
                <Box>
                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Box sx={{ backgroundColor: tasksByStage.color, width: "10px", height: "10px" }}></Box>
                        <Typography>{tasksByStage.title}</Typography>
                        <Typography>{tasksByStage.list.length}</Typography>
                    </Box>
                    <Button>+ Add New Task</Button>
                    {tasksByStage.list.map((task) => (
                        <Box sx={{ width: "300px" }}>
                            <Paper elevation={3}>
                                <Box sx={{ padding: "10px" }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        {task.tags.map((tag) => (
                                            <Typography>{tag}</Typography>
                                        ))}
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    </Box>
                                    <Typography>Title: {task.title}</Typography>
                                    <Typography>Description: {task.description}</Typography>
                                    <IconButton>
                                        <ChecklistIcon />
                                        <Typography>0/8</Typography>
                                    </IconButton>
                                </Box>
                                <Divider />
                                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px" }}>
                                    <Typography>{task.assignedMembers.toString()}</Typography>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <VisibilityIcon />
                                            {task.views.length}
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <CommentIcon />
                                            {task.commentaries.length}
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <AttachFileIcon />
                                            {task.files.length}
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Box>
                    ))}
                </Box>
            ))}
        </Box>
    );
};

export default Stages;
