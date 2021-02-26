import React from 'react';
import Header from '../../../components/organisms/header/header';
import Stories from '../../../components/organisms/stories/stories';
import Home from '../../../components/template/home/home';

const FeedScreen: React.FunctionComponent<any> = () => {
  const onCameraPressHandler = () => {

  };

  const onDirectPressHandler = () => {

  };

  return (
    <Home 
      header={<Header onCameraPress={onCameraPressHandler} onDirectPress={onDirectPressHandler} />}
      stories={<Stories />}
      data={Array.from(Array(30)).fill({text: 'no'})}
    />
  );
};

export default FeedScreen;