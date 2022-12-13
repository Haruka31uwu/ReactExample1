import React from 'react';
import { LEVELS } from '../../models/levels.enum';
import {Task} from '../../models/task.class';
import TaskC from '../pure/task';
const TaskListComponent = () => {
    const defaultTask=new Task('Example','Default Description',true,LEVELS.NORMAL);
    return (
        <div>
            <div>
                Your Tasks:
            </div>
            <TaskC task={defaultTask}></TaskC>
        </div>

    );
};




export default TaskListComponent;
