import CommentList from "@/components/comment/CommentList";
import StoreInformation from "@/components/detailMap/StoreInformation";
import dynamic from "next/dynamic";
import React from "react";

const SkeletonLoader = () => (
  <div className="w-full h-96 md:h-500 lg:h-600">
    <div className="w-full h-full bg-gray-100 animate-pulse">
      <div className="w-full h-full bg-gray-300"></div>
    </div>
  </div>
);

const KakaoMap = dynamic(() => import("@/components/detailMap/KakaoMap"), {
  ssr: false,
  loading: () => <SkeletonLoader />,
});

type SearchParams = {
  name?: string;
  address?: string;
  bakeryId?: string;
};

type DetailPageProps = {
  searchParams: SearchParams;
};

const DetailPage: React.FC<DetailPageProps> = ({ searchParams }) => {
  const { name, address, bakeryId } = searchParams;

  return (
    <div className="reactive-body mx-auto">
      {name && address ? <KakaoMap name={name} address={address} /> : null}
      {bakeryId ? <StoreInformation bakeryId={bakeryId} /> : null}

      {bakeryId ? <CommentList bakery_id={bakeryId} /> : null}
    </div>
  );
};

export default DetailPage;
