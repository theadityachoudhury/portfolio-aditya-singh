import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from 'fs';
import sizeOf from 'image-size';




export async function GET(req: NextRequest) {
  let images: { src: string, width: number, height: number }[] = [
    {
      "src": "17NkvtYlqiVvrpWAYOZKMVJGLJhoDSlTW",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1QXUHPArqPS4sUa_nT1CKERuujZA9qDVv",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "14QtKm-8nQQJZM5nSFWHxELh8zojDRt0J",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1oMcPf5TPoc6i6Amay-ezVjgt7gKVnZBb",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1lVYMTOzHJulvEl4EnV-eJza50hSm9s7B",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1n1q5bVgY8Pyk6UwfWNN3tRy5MqHvMPBp",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1WfnKkgxfvJ54_yDUsqkGLfeIRHWiVFWz",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1-2r9YR1IF60zJSyL4O5QcgdbLHUvIgzR",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1Hyl1NG1HGtqjWF_YPV4qA-K5bv74VCKM",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1oHE-MwOVov-EbxLEns91iCi6bUdP8mPL",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1FIeXCQn5gORioOPseUykCdb8TKo2_XCd",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "110dkwTSMv4QXz3sKDojUYU5tVJy4n-1C",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1wqGyfG-4lkIQj3KZCIOy3LidZ9NeNKBm",
      "width": 6000,
      "height": 4000
    },
    {
      "src": "1nPe2hj5Dw1R6cnWxmJvELrgG0GYj1WLy",
      "width": 6000,
      "height": 3368
    },
    {
      "src": "1fOZ6NwOI8a87LBj43EDNZTyJ3kHsLJf8",
      "width": 6000,
      "height": 3368
    },
    {
      "src": "1Bwmzjd54KhpTbrmTtkbhl03QB8XWSGWX",
      "width": 6000,
      "height": 3368
    }
  ];
  return NextResponse.json(images);
}