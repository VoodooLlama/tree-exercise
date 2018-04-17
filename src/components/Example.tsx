import * as React from 'react';
import { INodeTreeItemProps, NodeTreeItem } from './NodeTreeItem';
import { NodeTree } from './NodeTree';
import { nestTreeData } from '../services/treeHelpers';
const testData = require("../testdata.json");

interface IExampleState {
	treeData: INodeTreeItemProps[];
}

export class Example extends React.Component<{}, IExampleState> {
	constructor(props: any) {
		super(props);

		this.state = {
			treeData: nestTreeData(testData)
		};
	}

	renderTreeItems() {
		const { treeData } = this.state;

		if (!treeData || !treeData.length) {
			return;
		}

		return treeData.map((treeNode) => <NodeTreeItem { ...treeNode } />);
	}

	render() {
		return (
			<NodeTree>
				{ this.renderTreeItems() }
			</NodeTree>
		)
	}
}