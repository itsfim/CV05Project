import React, { Component } from 'react';
import '../../App.css'
import './Home.css'

class Home extends Component {
    render() {
        return(
            <div class="grid">
                <h1 class="h1">Home Page</h1>
                    <main class="main">
                        <div class="homePageDiv">
                            <h2 className='subHeading'>Disclaimer</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec feugiat leo. Praesent cursus pellentesque risus, euismod viverra lectus pellentesque id. Aenean imperdiet consequat sem tincidunt condimentum. Nam a velit interdum, suscipit nibh eget, lobortis libero. Nulla ipsum eros, malesuada nec ante sed, auctor gravida eros. Cras mauris lorem, pellentesque sit amet arcu et, hendrerit suscipit lectus. Nam tincidunt ipsum vel felis tempus, id finibus velit viverra. Praesent ut justo et purus facilisis posuere. Aenean nec euismod magna, ut eleifend leo. Fusce nisi sapien, rhoncus vitae lorem eu, pharetra iaculis ex. Phasellus tincidunt ullamcorper purus, eget tristique urna tempor eget. Nam eget lectus lorem. Integer consequat tortor dapibus leo elementum, in ultricies arcu viverra. Ut a nisi vel mi ultricies viverra. Morbi placerat pellentesque turpis at tincidunt. Fusce faucibus neque quis rutrum auctor.

Mauris porta sapien quis purus porttitor fermentum. Ut dictum malesuada odio, sit amet ornare diam accumsan in. Donec placerat lacus id est scelerisque, et consectetur orci faucibus. Nam eget odio dui. Aenean ultricies non ligula lacinia pharetra. Cras non odio ac sem tempus dictum molestie ac leo. Integer tempor diam tortor, et cursus odio porta vel. Aenean rutrum euismod efficitur. Morbi quis sapien consectetur, mattis odio ac, efficitur libero.</p>
                        </div>
                    </main>
                    <aside class="aside">
                        <div class="homePageDiv" id='imageHomePage'>
                            <h2 className='subHeading'>image placeholder</h2>
                        </div>
                        <div class="homePageDiv">
                            <h2 className='subHeading'>About</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                            Cras nec feugiat leo. Praesent cursus pellentesque risus, 
                            euismod viverra lectus pellentesque id. 
                            Aenean imperdiet consequat sem tincidunt condimentum. 
                            Nam a velit interdum, suscipit nibh eget, lobortis libero.</p>
                        </div>
                    </aside>
            </div>
        )
    }
}
export default Home;