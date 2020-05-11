import React from "react";
import Cover from "../../components/banner";
import ActionBar from "../../components/ActionBar";
import Profile from "../../components/Profile";
import Timeline from "../../components/Timeline";
import Suggestion from "../../components/Suggestion";
import { Content } from "../../styles/mainComponents";

function Main() {
  return (
    <>
      <Cover />
      <ActionBar />
      <Content>
        <Profile />

        <Timeline />
        <Suggestion />
      </Content>
    </>
  );
}

export default Main;
