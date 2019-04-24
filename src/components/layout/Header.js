import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  const { branding } = props;
  return (
    // <div className="background">
    //   {/* <hr style={{ height: '1px', visibility: 'hidden' }} /> */}

    //   <br />
    //   <div className="container p-1">
    //     <img
    //       src="https://edumonk.org/wp-content/uploads/2018/10/cropped-mokh_jk.jpg-2.png"
    //       alt="Image"
    //       height="42px"
    //       width="42px"
    //       style={{ float: 'left' }}
    //     />

    //     <img
    //       src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
    //       alt=""
    //       height="24px"
    //       width="24px"
    //       style={{ float: 'right' }}
    //     />
    //     <nav className="navbar navbar-expand-sm navbar-dark">
    //       {/* <div className="container"> */}

    //       <div>
    //         <ul className="navbar-nav mx-auto">
    //           <li className="nav-item active">
    //             <Link to="/" className="nav-link">
    //               Our Team
    //             </Link>
    //           </li>
    //           <li className="nav-item active">
    //             <Link to="/contact/add" className="nav-link">
    //               Exams
    //             </Link>
    //           </li>
    //           <li className="nav-item active">
    //             <Link to="/about" className="nav-link">
    //               Courses
    //             </Link>
    //           </li>
    //           <li className="nav-item active">
    //             <Link to="" className="nav-link">
    //               Colleges
    //             </Link>
    //           </li>
    //           <li className="nav-item active">
    //             <Link to="" className="nav-link">
    //               Live Webinar
    //             </Link>
    //           </li>
    //         </ul>
    //         <ul className="navbar-nav">
    //           <li className="nav-item">
    //             <img
    //               src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg=="
    //               alt=""
    //               height="24px"
    //               width="24px"
    //               // /\style={{ float: 'right' }}
    //             />
    //           </li>
    //         </ul>
    //       </div>
    //       {/* </div> */}
    //     </nav>
    //   </div>
    // </div>

    <div className="background">
      <nav className="navbar navbar-expand-sm navbar-dark ">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src="https://edumonk.org/wp-content/uploads/2018/10/cropped-mokh_jk.jpg-2.png"
              alt="Image"
              height="42px"
              width="42px"
              style={{ float: 'left' }}
            />
          </a>

          <ul className="navbar-nav mx-auto">
            <li className="nav-item active">
              <Link to="/ourteam" className="nav-link">
                Our Team
              </Link>
            </li>{' '}
            <li className="nav-item active">
              {' '}
              <Link to="/exams" className="nav-link">
                Exams{' '}
              </Link>{' '}
            </li>{' '}
            <li className="nav-item active">
              {' '}
              <Link to="/courses" className="nav-link">
                Courses{' '}
              </Link>{' '}
            </li>{' '}
            <li className="nav-item active">
              {' '}
              <Link to="/colleges" className="nav-link">
                Colleges{' '}
              </Link>{' '}
            </li>{' '}
            <li className="nav-item active">
              {' '}
              <Link to="/webinar" className="nav-link">
                Live Webinar{' '}
              </Link>{' '}
            </li>
          </ul>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item dropdown">
            <a
              className="nav-link"
              href="https://www.linkedin.com/company/edumonk-foundation/?originalSubdomain=in"
            >
              <img
                src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-512.png"
                alt=""
                height="24px"
                width="24px"
                // style={{ float: 'right' }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.facebook.com/edumonkfoundation/"
            >
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAaVBMVEU6VZ////81Up0yT5xgc61+jbsvTZyXo8hFXaOirM0nSJmlrs7O1OUkRpkfQ5doerLr7fTHzeE9WKHV2umHlcDy9Pnd4eyut9O1vtdZbat5ibmWoceGk7/M0eSrs9G/xtxMY6ZvgLVIYaWJ8OFBAAAC40lEQVR4nO3c63KqMBRAYU9iqaLg/d7W2vd/yE5nzt/ihjTsvTNrPQDDNxIDJDqZEBERERERERERERERERFZL4QYqydF7ZMcXKyadju97m/zzhZ7n8SqCY/T8Z+kXa19sv2LdbztRLqflu6EsXm8i3kOhbF9WffxeROG9tHT50xYbTd9fb6E7Vt/nydhqO9DgH6EcdZ7BPoSVpdhPjfCajUU6EQYhwN9COPncKALYdgeChe2socIv8LmnAJ0IIzXJKADYZMyCD0IE69R+8Iw+F7Gi7CVv67wKQzTVKB1YbMsXBhSbtdcCOtT6cLUudC8MD7SgbaFdepsb17YDHw140YYZn8ANC2M+78QWl57qvoMw8PuvHC3fljL70k3q7qu/a0Bt9LZ8HhpgvbJDioKgffWp28SvqRA7TMdmvDJ6egWKBV+Ob1EJ1LhyfB09yyZ0PFHKBMeG+3TTEgkPFXap5mQSGj5nuxpIuELQsshRGg/hAjthxCh/RAitB9ChPZDiNB+CBHarwxh6PiJci3ZWnptnv3SWRm4ev2920IgPN86jvDTfKsqrD4EiMR0V98qyceU1kF3iXgEofLy2wjCe/FX6Yful+kIwn3xwpXuOv8Iws/ihcr3NPmFa+UdU/mFS+XdKPmFZ+UtU/mFr8WPQ+3nx/zCi/K2t/xC7VcA2YUH7b2Z2YXqWxezCzfFf4bqmzOzC2/Ff9M8ihdqT4f5hdrDMLtQ+VXiCEL93x7mFiq/ShxBOC9+HL5pTxbZhVPtySK7UNuXXXhQH4a5hWvtZ6fswnf1ySL3GvBZ/yqdbGcdSf4O8q3rCLpL+P8LvxdFu02qjiNo455Vxn6arhAitB9ChPZDiNB+CBHaDyFC+yFEaD+ECO2HEKH9ECK0H0KE9kOI0H4IEdoPIUL7IURoP4QI7YcQof0QIrQfQoT2Q4jQfggR2g8hQvshRGg/hAjthxCh/RAitB9ChPZDiNB+CBH26BsaQkVVLImVewAAAABJRU5ErkJggg=="
                alt=""
                height="24px"
                width="24px"
                style={{ float: 'right' }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://www.youtube.com/channel/UC5Q6kbXwwZ79aydaoe80R2Q"
            >
              <img
                src="https://seeklogo.com/images/Y/youtube-icon-logo-521820CDD7-seeklogo.com.png"
                alt="YouTube"
                height="24px"
                width="35px"
                style={{ float: 'right' }}
              />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://twitter.com/">
              <img
                src="https://seeklogo.com/images/T/twitter-2012-negative-logo-5C6C1F1521-seeklogo.com.png"
                alt="Twitter"
                height="24px"
                width="24px"
                style={{ float: 'right' }}
              />
            </a>
          </li>
        </ul>
      </nav>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

Header.defaultProps = {
  branding: 'My App'
};

Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
