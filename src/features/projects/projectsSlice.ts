import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

interface Tag {
    id: number;
    title: string;
    backgroundColor: string;
    fontColor: string;
}

interface Task {
    id: number;
    title: string;
    description: string;
    stageId: number;
    checklist: Array;
    assignedMembers: Array<number>;
    tags: Array;
    views: Array;
    commentaries: Array;
    files: Array; // TODO: Пока не придумал, как организовать хранение файлов
}

interface Stage {
    id: number;
    title: string;
    color: string;
}

interface Project {
    id: number;
    title: string;
    type: "opened" | "closed" | "private";
    // TODO: Изучить - https://tsdoc.org/
    /*
    Типы проектов:
    1) opened - открытый, отображается в списке доступных для входа проектов у всех приглашенных коллег, каждый может вступить
    2) closed - закрытый, отображается в списке доступных для входа проектов у всех приглашенных коллег, вступить можно только по приглашению
    3) private - приватный, не отображается в списке доступных для входа проектов у всех приглашенных коллег, вступить можно только по приглашению
    */
    stages: Array<Stage>;
    projectParticipants: Array;
    tags: Array<Tag>;
    list: Array<Task>;
}

type ProjectsState = Array<Project>;

const initialState: ProjectsState = [
    {
        id: 1,
        title: "Test project",
        type: "opened",
        stages: [
            {
                id: 1,
                title: "To Do",
                color: "#ff817c",
            },
            {
                id: 2,
                title: "In Progress",
                color: "#375dff",
            },
            {
                id: 3,
                title: "Need Review",
                color: "#ffbd39",
            },
            {
                id: 4,
                title: "Done",
                color: "#10bf96",
            },
        ],
        projectParticipants: [
            {
                id: 1,
                type: "creator",
            },
            {
                id: 2,
                type: "helper",
            },
            {
                id: 3,
                type: "participant",
            },
        ],
        // TODO: Доделать типы участников проекта; рассмотреть возможность добавлять кастомные роли
        /* Типы участников проекта: 
    1) Creator (создатель): имеет полный доступ к настройке проекта; может удалить проект
    2) Participant (участник): не имеет доступа к настройке проекта;
    3) Helper (помощник): имеет полный доступ к настройке проекта
    */
        tags: [
            {
                id: 1,
                title: "UX stages",
                backgroundColor: "#fff1d6",
                fontColor: "#f1982d",
            },
            {
                id: 2,
                title: "Design",
                backgroundColor: "#fc7971",
                fontColor: "#fc7971",
            },
            {
                id: 3,
                title: "Branding",
                backgroundColor: "#fc7971",
                fontColor: "#fc7971",
            },
        ],
        list: [
            {
                id: 1,
                title: "Wireframing",
                description: "Test",
                stageId: 1,
                checklist: [
                    {
                        title: "Test1",
                        description: "Test1",
                    },
                ],
                assignedMembers: [1, 2], // ID участников, которые являются ответственными за данную задачу
                tags: [1], // ID тегов, которые применены к данной задаче
                views: [1, 2], // ID участников проекта, которые просмотрели данную задачу
                commentaries: [
                    {
                        content: "Test1",
                        createdDate: new Date("03.07.2023 12:00"),
                        editedDate: new Date("03.07.2023 12:00"),
                        authorId: 1,
                    },
                ],
                files: [],
            },
            {
                id: 2,
                title: "First design concept",
                description: "Test",
                stageId: 2,
                checklist: [
                    {
                        title: "Test1",
                        description: "Test1",
                    },
                ],
                assignedMembers: [1, 2],
                tags: [2], // ID тегов, которые применены к данной задаче
                views: [1, 2], // ID участников проекта, которые просмотрели данную задачу
                commentaries: [
                    {
                        content: "Test1",
                        createdDate: new Date("03.07.2023 12:00"),
                        editedDate: new Date("03.07.2023 12:00"),
                        authorId: 1,
                    },
                ],
                files: [],
            },
        ],
    },
];

export const projectsSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        changeTitle: (state, action) => {
            state.title = action.payload;
        },
        addNewTask: (state, action) => {},
    },
});

export const { changeTitle } = projectsSlice.actions;

// TODO: Разобраться с тем, как правильно писать селекторы в слайсах и использовать их
// export const selectTasksByStages = (projectId) =>
//     state.projects[projectId].stages.map((stage) => {
//         return {
//             ...stage,
//             list: state.projects.list.filter((task) => task.stageId === stage.id),
//         };
//     });

export default projectsSlice.reducer;
