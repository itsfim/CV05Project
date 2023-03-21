import React from 'react';

class Homepage extends React.Component {

render() {
  return (<div className='pageIntro'>
    <h1>Homepage test</h1>
    <div className='Wrapper'>
        <div className='item'>
            <h2>Disclaimer</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat neque ut magna eleifend, eget vestibulum odio convallis. Nulla facilisi. Suspendisse potenti. Donec vitae lobortis sem. Donec elementum id elit euismod eleifend. Nullam auctor ante bibendum risus tincidunt interdum. Donec et suscipit metus. Proin iaculis lobortis dui. Aenean condimentum rhoncus dui, id aliquet orci molestie nec.
Aliquam vitae tortor neque. Pellentesque laoreet molestie venenatis. Quisque odio est, vulputate eget pellentesque quis, pellentesque sit amet neque. Duis vitae blandit mauris. Donec nisl tortor, convallis in sodales sed, suscipit sed sapien. Quisque posuere cursus ipsum, nec luctus mauris. Morbi sollicitudin, dui sed gravida imperdiet, tortor nunc hendrerit neque, vitae luctus nisl enim vitae elit. Sed id varius ex, at luctus libero. Vivamus mattis dolor ac nisl ullamcorper, vel bibendum erat blandit. Aliquam accumsan malesuada ex cursus placerat. Quisque vestibulum fermentum euismod. Curabitur tristique metus finibus metus luctus, in varius neque fringilla. Nam accumsan lorem nec enim ornare maximus. Pellentesque facilisis magna in consequat hendrerit. Nulla et massa vel risus ultricies rutrum ac vel dolor. Duis placerat nibh eu dolor feugiat blandit.
Vivamus dapibus sem et augue hendrerit eleifend. Nunc lacinia et lorem eget elementum. Aenean mollis enim nibh, vitae pretium odio varius eget. Proin dapibus, nunc eget fringilla tincidunt, risus lorem pellentesque quam, vel cursus enim nibh ut dui. Integer a urna in libero luctus dignissim. Pellentesque varius, nisi sit amet aliquet posuere, enim sapien porta arcu, vitae condimentum turpis est sed elit. Aenean mollis pulvinar lectus quis fermentum. </p>
        </div>
        <div className='item'>
            <img src={require('./images/placeholder.jpg')} alt='placeholder'/>
        </div>
        <div className='item'>
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam consequat neque ut magna eleifend, eget vestibulum odio convallis. Nulla facilisi. Suspendisse potenti. Donec vitae lobortis sem. Donec elementum id elit euismod eleifend. Nullam auctor ante bibendum risus tincidunt interdum. Donec et suscipit metus. Proin iaculis lobortis dui. Aenean condimentum rhoncus dui, id aliquet orci molestie nec.
Aliquam vitae tortor neque. Pellentesque laoreet molestie venenatis. Quisque odio est, vulputate eget pellentesque quis, pellentesque sit amet neque. Duis vitae blandit mauris. Donec nisl tortor, convallis in sodales sed, suscipit sed sapien. Quisque posuere cursus ipsum, nec luctus mauris. Morbi sollicitudin, dui sed gravida imperdiet, tortor nunc hendrerit neque, vitae luctus nisl enim vitae elit. Sed id varius ex, at luctus libero. Vivamus mattis dolor ac nisl ullamcorper, vel bibendum erat blandit. Aliquam accumsan malesuada ex cursus placerat. Quisque vestibulum fermentum euismod. Curabitur tristique metus finibus metus luctus, in varius neque fringilla. Nam accumsan </p>
        </div>
    </div></div>
  );
}
}

export default Homepage;