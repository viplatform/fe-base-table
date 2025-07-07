import catImg from '../../../assets/images/cat.svg';
const NoDataError = ({ text = 'Looks like there is no data to show' }) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center p-6'>
      <img className='mb-4' width='95' src={catImg} alt='cat' />
      <div className='text-base text-[#000000] font-medium'>{text}</div>
    </div>
  );
};

export default NoDataError;
