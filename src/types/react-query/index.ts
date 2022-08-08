export interface IOptionDTO {
  enabled?: boolean;
  retry?: boolean;
  onSuccess?: (all: unknown) => void;
}
