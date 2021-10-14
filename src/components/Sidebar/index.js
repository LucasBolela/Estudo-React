import React from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Button, Title, SidebarContainer, ModuleContainer } from '../../styles';


import * as CourseActions from '../../store/actions/course';

let value = 0;

const Sidebar = ({ modules, toggleLesson }) => (
    <SidebarContainer right={value} onClick={() => value = value ? 0 : -400}>
        {
            modules.map(module => (
                <ModuleContainer key={module.id}>
                    <Title>{module.title}</Title>
                    <ul>
                        {
                            module.lessons.map( lesson => (
                                <li key={lesson.id}>
                                    {lesson.title}
                                    <Button onClick={() =>  toggleLesson(module, lesson)}>
                                        Selecionar
                                    </Button>
                                </li>
                            ))
                        }
                    </ul>
                </ModuleContainer>
            ))
        }
    </SidebarContainer>
);

const mapStateToProps = state => ({
    modules: state.course.modules
});

const mapDispatchToProps = dispatch => bindActionCreators(CourseActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);