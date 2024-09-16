import { Icon, type IconProps } from './icon';

export default function Box(props: IconProps) {
  return (
    <Icon {...props}>
      <svg viewBox='0 0 20 20'>
        <path
          d='M18.9048 13.428C19.1429 13.7613 19.0952 14.1899 18.8095 14.428C18.4762 14.6661 18 14.6185 17.7619 14.3328L16.0952 12.1899L14.4762 14.2852C14.2381 14.6185 13.7619 14.6185 13.4286 14.3804C13.0952 14.1423 13.0476 13.7137 13.2857 13.3804L15.1905 10.9042L13.2857 8.42801C13.0476 8.09468 13.1429 7.61849 13.4286 7.38039C13.7619 7.1423 14.2381 7.23754 14.4762 7.52325L16.0952 9.66611L17.7619 7.61849C18 7.28516 18.4286 7.23754 18.8095 7.47563C19.1429 7.71373 19.1429 8.18992 18.9048 8.52325L17.0476 10.9518L18.9048 13.428ZM10.2381 13.1423C9 13.1423 8 12.1899 8 10.9518C8 9.76135 9 8.76135 10.2381 8.76135C11.4762 8.76135 12.4762 9.76135 12.4762 10.9518C12.4286 12.1899 11.4286 13.1423 10.2381 13.1423ZM3.66667 13.1423C2.42857 13.1423 1.42857 12.1899 1.42857 10.9518C1.42857 9.76135 2.42857 8.76135 3.66667 8.76135C4.90476 8.76135 5.90476 9.76135 5.90476 10.9518C5.90476 12.1899 4.90476 13.1423 3.66667 13.1423ZM10.2381 7.33278C8.85714 7.33278 7.61905 8.09468 7 9.23754C6.38095 8.09468 5.14286 7.33278 3.71429 7.33278C2.85714 7.33278 2.09524 7.61849 1.47619 8.04706V4.99944C1.47619 4.61849 1.14286 4.28516 0.761905 4.28516C0.333333 4.28516 0 4.61849 0 4.99944V10.9994C0.047619 12.9994 1.66667 14.5709 3.66667 14.5709C5.09524 14.5709 6.33333 13.7613 6.95238 12.6185C7.57143 13.7613 8.80952 14.5709 10.1905 14.5709C12.2381 14.5709 13.9048 12.9518 13.9048 10.9042C13.9524 8.95182 12.2857 7.33278 10.2381 7.33278Z'
          fill='#0061D5'
        />
      </svg>
    </Icon>
  );
}