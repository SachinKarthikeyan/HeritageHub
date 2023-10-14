'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [

  {
    label: 'Following',
    icon: GiWindmill,
    description: 'These are the jones you follow',
  },
  {
    label: 'Discover',
    icon: MdOutlineVilla,
    description: 'Discover'
  },
  {
    label: 'Coins',
    icon: TbMountain,
    description: 'Rusty old coins'
  },
  {
    label: 'Manuscripts',
    icon: TbPool,
    description: 'Old barely readable books'
  },
  {
    label: 'Cultural & Ethnic',
    icon: GiIsland,
    description: 'Things old as in anciient people used'
  },
  {
    label: 'Medals',
    icon: GiBoatFishing,
    description: 'things people give you when you win a race'
  },
  

]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            selected={category === item.label}
          />
        ))}
      </div>
    </Container>
  );
}
 
export default Categories;