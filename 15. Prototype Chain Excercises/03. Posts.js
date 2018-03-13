function solve() {
    class Post {
        constructor(title, content) {
            this.title = title
            this.content = content
        }

        toString() {
            return `Post: ` + this.title + "\nContent: " + this.content
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content)
            this.likes = likes
            this.dislikes = Number(dislikes)
            this.comments = []
        }

        addComment(comment) {
            this.comments.push(comment)
        }

        toString() {
            let likes = this.likes - this.dislikes
            if (this.comments.length === 0) {
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${likes}`
            }
            else {
                let comms = ''
                for (let c of this.comments) {
                    comms+=` * ${c}\n`
                }
                return `Post: ${this.title}\nContent: ${this.content}\nRating: ${likes}\nComments:\n${comms}`.trim()
            }
        }
    }

    // let views = 0;

    class BlogPost extends Post {
        constructor(title, content,views) {
            super(title, content)
            this.views = views
        }

        view() {
            this.views++
            return this
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}\nViews: ${this.views}`
        }
    }

    return {Post, SocialMediaPost, BlogPost}
}

// let post = new Post("Post", "Content");
//
// console.log(post.toString());
//
// let scm = new SocialMediaPost("TestTitle", "TestContent", 25, 30);
//
// scm.addComment("Good post");
// scm.addComment("Very good post");
// scm.addComment("Wow!");
//
// console.log(scm.toString());

let blgpost=new BlogPost('da','ne',3)
blgpost.view()
console.log(blgpost);
