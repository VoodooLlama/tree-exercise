import * as request from 'request';
import { INodeTreeItemProps } from '../components/NodeTreeItem';
import { IThumbnailProps } from '../components/Thumbnail';
const testData: ITreeItem[] = require('../testdata.json');

interface ITreeItem {
	id: number;
	name: string;
	thumbnail: IThumbnailProps;
	parent: number | null;
}

// Identify all children of a tree node
function matchTreeChildren(parentId: number, items: ITreeItem[]) : ITreeItem[] {
	return (items && items.length)
		? items.filter((item: ITreeItem) => parentId === item.parent)
		: [];
}

// Converts flattened data array to nested tree structure
export function nestTreeData(treeItems: ITreeItem[], parentId?: number): INodeTreeItemProps[] {
	if (!treeItems || !treeItems.length) {
		return [];
	}

	// Add children references to nodes, filter top-level nodes
	return treeItems
		.map((treeItem) => {
			return Object.assign(treeItem, {
				children: matchTreeChildren(treeItem.id, treeItems)
			});
		})
		.filter((treeItem) => treeItem.parent === null);
}