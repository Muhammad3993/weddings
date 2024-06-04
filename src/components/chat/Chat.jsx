import { useContext } from 'react';
import { Context } from '../../context/Context';
import './chat.css';

// import icons
import {MdOutlineClose, MdOutlineAttachFile} from 'react-icons/md';
import {BsEmojiSmile} from 'react-icons/bs';
import {IoPaperPlaneOutline} from 'react-icons/io5';


import avatar from '../../images/servicess/img1.png'


const Chat = () => {

    const {openChat, setOpenChat} = useContext(Context);

  return (
    <>
        {
        !openChat ? 
        <div className="chat-icon"  onClick={()=>setOpenChat(!openChat)}>
            <span></span>
            <span></span>
            <span></span>
        </div>:
        <div className="chatting">
            <div className="chatting-close" onClick={()=>setOpenChat(!openChat)}>
                <MdOutlineClose/>
            </div>
            <div className="chatting-header">Call centre</div>
            <div className="chatting-bio">Biz yordam berishga tayyormiz 🙂</div>
            <div className="chatting-messages">
                <div className="message-me">
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores!
                    </span>
                    <div className="message-time">10:54</div>
                </div>
                <div className="message-me">
                    <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores!
                    </span>
                    <div className="message-time">10:54</div>
                </div>
                <div className="message-me its">
                    <div className="message-sender-img">
                        <img src={avatar} alt="name" />
                    </div>
                    <span>
                        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eveniet neque amet adipisci dolorum tempore ab perferendis porro, architecto alias! consectetur adipisicing elit. Saepe, dolores!
                    </span>
                    <div className="message-time its">10:54</div>
                </div>
            </div>
            <form  className="chatting-type-box">
                <input type="text" className='chat-input-for-text'  placeholder='Xabarni yozing...' />
                <span className="chatting-smile">
                    <BsEmojiSmile/>
                </span>
                <input type="file" id='file' className="chat-input-for-files" />
                <label htmlFor="file" className="chat-input-for-files-label">
                    <MdOutlineAttachFile/>
                </label>
                <button className="chatting-button-for-send">
                    <IoPaperPlaneOutline/>
                </button>
            </form>
        </div>
        }
    </>
  )
}

export default Chat