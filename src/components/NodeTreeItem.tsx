import * as React from "react";
import * as classNames from "classnames";
import { IThumbnailProps, Thumbnail } from './Thumbnail';

export interface INodeTreeItemProps {
	children?: any;
	id?: number;
	expanded?: boolean;
	name?: string;
	thumbnail?: IThumbnailProps;
}

export interface INodeTreeState {
	expanded: boolean;
}

export class NodeTreeItem extends React.Component<INodeTreeItemProps, INodeTreeState> {
	constructor(props: INodeTreeItemProps) {
		super(props);

		this.state = {
			expanded: props.expanded || false
		};

		this.handleItemClick = this.handleItemClick.bind(this);
	}

	/**
	 * Event handler for selecting a node tree item
	 * @param event {React.SyntheticEvent<EventTarger>} Represents the incoming click action event
	 */
	handleItemClick = (event?: React.SyntheticEvent<EventTarget>) => {
		const { expanded } = this.state;
		const { children } = this.props;

		if (!children || !children.length) {
			return;
		}

		this.setState({
			expanded: !expanded
		});
	};

	renderChildren() {
		const { children } = this.props;
		const { expanded } = this.state;

		return expanded && children && (
			<div className='indent'>
				{
					children.map((childData: INodeTreeItemProps) => {
						return 	<NodeTreeItem { ...childData }/>;
					})
				}
			</div>
		);
	}

	renderArrow() {
		const { children } = this.props;
		const { expanded } = this.state;

		const arrowCharacter = expanded
			? '\u25BC'  // ▼
			: '\u25B6'; // ▶

		if (children && children.length) {
			return <div className='arrow'>{ arrowCharacter }</div>;
		}
	}

	renderThumbnail() {
		const { thumbnail } = this.props;

		return (
			<Thumbnail { ...thumbnail }/>
		);
	}

	render() {
		const { children, thumbnail, name } = this.props;
		const contentStyle = classNames('content', {
			selectable: children && children.length
		});

		return (
			<div className='tree-item'>
				<div className={ contentStyle } onClick={ this.handleItemClick }>
					{ this.renderThumbnail() }
					<div className='title'>{ name }</div>
					{ this.renderArrow() }
				</div>
				{ this.renderChildren() }
			</div>
		);
	}
}