﻿import { atom } from 'recoil';
import { book, IChapter } from '../data/data';
import { database } from './storage';
import { BOOKMARKS_STORE } from './config';

let bookmarks: IChapter[] = [];

const initialiseState = async () => {
    await (await database).getAll(BOOKMARKS_STORE).then((chapters: IChapter[]) => {
        bookmarks = chapters;
    });
}
initialiseState();

export const navigationPanelIsOpenState = atom({ key: 'navigationPanelIsOpenState', default: false });
export const fontSizeState = atom({ key: 'fontSizeState', default: 12 });
export const isNightModeState = atom({ key: 'isNightModeState', default: false });
export const bookmarksState = atom({ key: 'bookmarksState', default: bookmarks });
export const currentChapterState = atom({ key: 'currentChapterState', default: book.contents.chapters[0] });
export const bookState = atom({ key: 'bookState', default: book });

