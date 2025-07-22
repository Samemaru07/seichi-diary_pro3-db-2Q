# 詳細設計書

## 1. はじめに
この文書は、Seichi-diaryの各構成要素(DB・API・画面)の具体的な使用を定義し、開発時の参照や保守に役立てることを目的とする。


## 2. データベース設計

```
- prefectures
    - prefecture_id (PK)
    - prefecture_name

- regions
    - region_id (PK)
    - region_name
    - prefecture_id (FK)

- posts
    - post_id (PK)
    - title
    - content
    - region_id (FK)
    - anime_id (FK)
    - visit_day
    - post_created_at
    - post_updated_at
    - good_number

- comments
    - comment_id (PK)
    - content
    - post_time
    - post_id (FK)

- post_tag
    - post_id (PK∧FK)
    - tag_id (PK∧FK)

- tag_lists
    - tag_id (PK)
    - tag_name

- animes
    - anime_id (PK)
    - anime_name
    - anime_how_to_read1
    - anime_how_to_read2
    - anime_how_to_read3
    - anime_how_to_read4

- admin
    - id (PK)
    - username
    - password
```


## 3. API仕様
