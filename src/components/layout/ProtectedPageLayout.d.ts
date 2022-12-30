declare namespace IProtectedPageLayout {
  export interface IProps {
    children: React.ReactNode;
  }

  export interface ISearchContextProps {
    searchedValue: string;
    setSearchedValue: React.Dispatch<React.SetStateAction<string>>;
  }
}

export default IProtectedPageLayout;