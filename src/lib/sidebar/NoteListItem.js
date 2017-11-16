import React from "react";
import { getPreview } from "../preview";
import PropTypes from "prop-types";
import { selectNote } from "../../redux/actions";
import { connect } from "react-redux";
import { MenuCard } from "../ui/Menu";

class NoteListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    this.props.dispatch(selectNote(this.props.note.uuid));
  };

  render() {
    const preview = getPreview(this.props.note);
    return (
      <MenuCard onClick={this.onClick} key={`${this.props.note.uuid}-note`}>
        {preview}
      </MenuCard>
    );
  }
}

NoteListItem.propTypes = {
  note: PropTypes.object.isRequired
};

export default connect()(NoteListItem);
