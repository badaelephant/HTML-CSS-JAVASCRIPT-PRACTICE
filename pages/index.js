import tw from "tailwind-styled-components";
export function Item({ idx }) {
  return (
    <div
      className="bg-purple-600 w-20 h-20 rounded-lg text-white text-3xl 
    flex items-center justify-center hover:bg-purple-800 shadow border transform last:rotate-45 first:rotate-45 "
    >
      {idx}
    </div>
  );
}
export default function Home() {
  const Container = tw.div`
  flex
  items-center
  justify-center
  flex-col
  w-full
  bg-indigo-600
`;
  const items = [{ idx: 1 }, { idx: 2 }, { idx: 3 }, { idx: 4 }];

  return (
    <>
      <Container>
        <div className="text-white">
          Use the Container as any other React Component
        </div>
      </Container>
      <button className="my-3 bg-green-400 rounded-lg py-2 px-2 text-white font-bold hover:bg-green-700 lg:bg-gray-400">
        Hello, Tailwind CSS!
      </button>

      <div className="flex space-x-5">
        {items.map((item, i) => (
          <Item idx={item.idx} key={i} />
        ))}
      </div>
    </>
  );
}
