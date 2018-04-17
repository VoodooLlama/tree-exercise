import * as React from 'react';
import { NodeTreeItem, INodeTreeItemProps } from './NodeTreeItem';

export interface INodeTreeProps {
	children?: JSX.Element | JSX.Element[]
}

export class NodeTree extends React.PureComponent<INodeTreeProps, {}> {
	render() {
		const { children } = this.props;

		return (
			<div className='node-tree'>
				{ children }
			</div>
		);
	}
}