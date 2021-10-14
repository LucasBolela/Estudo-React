import React from "react";

import { connect } from "react-redux";
import { VideoContainer } from "../../styles";

const Video = ({ activeModule, activeLesson}) => (
    <VideoContainer>
        <h1 fontSize={24}>Modulo: {activeModule.title}</h1>
        <h2 fontSize={24}>Aula: {activeLesson.title}</h2>
    </VideoContainer>
);

export default connect(state => ({
    activeModule: state.course.activeModule,
    activeLesson: state.course.activeLesson,
}))(Video);