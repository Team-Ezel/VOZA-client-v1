import styled from '@emotion/styled'

export const CategoryWrapper = styled.div`
  color: #656b80;
  font-weight: 500;
  select {
    padding-left: 10px;
    height: 35px;
    width: 120px;
    background-color: #f2f2f4;
    border: 0;
    outline: none;
    color: #656b80;
    border-radius: 5px;
    font-weight: 500;
    font-size: 14px;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-image: url('data:image/svg+xml;utf8,%3Csvg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none"%3E%3Cpath fill-rule="evenodd" clip-rule="evenodd" d="M2.2635 6.388C2.32737 6.32397 2.40323 6.27318 2.48676 6.23852C2.57028 6.20386 2.65982 6.18602 2.75025 6.18602C2.84068 6.18602 2.93022 6.20386 3.01375 6.23852C3.09727 6.27318 3.17314 6.32397 3.237 6.388L11.0003 14.1526L18.7635 6.388C18.8926 6.2589 19.0677 6.18638 19.2503 6.18638C19.4328 6.18638 19.6079 6.2589 19.737 6.388C19.8661 6.51709 19.9386 6.69218 19.9386 6.87475C19.9386 7.05731 19.8661 7.2324 19.737 7.3615L11.487 15.6115C11.4231 15.6755 11.3473 15.7263 11.2637 15.761C11.1802 15.7956 11.0907 15.8135 11.0003 15.8135C10.9098 15.8135 10.8203 15.7956 10.7368 15.761C10.6532 15.7263 10.5774 15.6755 10.5135 15.6115L2.2635 7.3615C2.19948 7.29764 2.14868 7.22177 2.11402 7.13824C2.07936 7.05472 2.06152 6.96518 2.06152 6.87475C2.06152 6.78432 2.07936 6.69478 2.11402 6.61125C2.14868 6.52773 2.19948 6.45186 2.2635 6.388Z" fill="%23656B80"/%3E%3C/svg%3E');
    background-repeat: no-repeat;
                background-position: calc(100% - 10px) center;
  }
  select::-ms-expand {
    display: none;
  }

  option {
    background: #f2f2f4;
    color: #656b80;
    font-weight: 500;
  }
`
