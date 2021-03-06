import React from 'react';
import { IChapter} from '../data/data'
import { getTheme, Text } from '@fluentui/react';
import { useRecoilState } from 'recoil';
import { fontSizeState } from '../utils';

interface IArticleProps {
    chapter: IChapter
}

const theme = getTheme();

export const Article = ({ chapter }: IArticleProps) => {
    const [fontSize, setFontSize] = useRecoilState(fontSizeState);

    const style: React.CSSProperties = {
        display: 'block',
        padding: '6vw',
        fontSize: fontSize, 
        boxSizing:"border-box",
        maxWidth: 'min(800px , 100%)',
        margin: '12vw auto',
        backgroundColor: theme.semanticColors.bodyBackground,
        textAlign: 'left',
        boxShadow: '0 3.2px 7.2px 0 rgba(0, 0, 0, .132), 0 0.6px 1.8px 0 rgba(0, 0, 0, .108)',
    }

    const { short_title, long_title, subsections, content } = chapter;

    return (
        <article style={style}>
             <Text variant="xxLarge" block>{short_title} - {long_title}</Text>
            {subsections ?
                subsections.map((section: any) => { return <section key={section.short_title}>{section.content}</section> })
                : content}
        </article>
    )
}