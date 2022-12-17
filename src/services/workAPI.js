import fetcher from "./fetcher";

const workAPI = {
  getWorks: (workName) => {
    return fetcher.get(
      `cong-viec/lay-danh-sach-cong-viec-theo-ten/${workName}`
    );
  },
};

export default workAPI;
