import { FC } from "react";
import { Container } from "../../../../common/components/ container/container";
import { ArticleList } from "../article-list/article-list";


interface FeedProps {}

export const Feed: FC<FeedProps> = () => {
  return (
   <Container>
      <div className="flex">
         <ArticleList />
         <div className="w-1/4">tags</div>
      </div>
   </Container>
  )
};
