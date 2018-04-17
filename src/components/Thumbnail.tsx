import * as React from "react";
import * as classNames from "classnames";
import { DEFAULT_ALT_CONTENT, SIZE } from "../constants/THUMBNAIL";

export interface IThumbnailProps {
	description?: string;
	href: string;
	size?: SIZE
}

export class Thumbnail extends React.PureComponent<IThumbnailProps, {}> {
	constructor(props: IThumbnailProps) {
		super(props);
	}

	public static defaultProps: IThumbnailProps = {
		description: DEFAULT_ALT_CONTENT,
		href: '',
		size: SIZE.SMALL
	};

	render() {
		const { description, href, size } = this.props;
		const imageClassName = classNames('thumbnail', size);

		return (
			<img
				alt={ description }
				className={ imageClassName }
				src={ href }
				title={ description }>
			</img>
		);
	}
}