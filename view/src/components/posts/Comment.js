import React, { Component } from 'react'
import mongoose from "mongoose";
import moment from "moment";

export class Comment extends Component {
  creationTime() {
    const { _id } = this.props.comment;
    const isoDate = mongoose.Types.ObjectId(_id).getTimestamp();
    const mom = new moment(isoDate);
    const now = new moment();
    const duration = moment.duration(now.diff(mom));

    return duration.humanize();
  }

    render() {
        const { text, user} = this.props.comment;
        return (
            <div>

            
          
            <div className="post_item">
          <div className="User_info">
            <div className="user_img">
            <img src={user.image} alt={user.name} />
            </div>
            <div className="user_name">{user.name}</div>
            <span className="float-right text-small ml-auto">{this.creationTime()}</span>
          </div>
          <div className="post">
            <textarea
              disabled="true"
              value={text}
            ></textarea>
          </div>
        </div>

            </div>
        )
    }
}


export default Comment
