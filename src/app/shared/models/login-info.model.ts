export interface ILoginInfoModule {
    email?: string,
    email_verified?: boolean,
    family_name?: string,
    given_name?: string,
    locale?: string,
    name?: string,
    nickname?: string,
    picture?: string,
    sub?: string,
    updated_at?: string
}

export class LoginInfoModule implements ILoginInfoModule {

    public email: string;
    public email_verified: boolean;
    public family_name: string;
    public given_name: string;
    public locale: string;
    public name: string;
    public nickname: string;
    public picture: string;
    public sub: string;
    public updated_at: string;

    constructor(item: any) {

        this.email = item.email ?? "";
        this.email_verified = item.email_verified ?? false;
        this.family_name = item.family_name ?? "";
        this.given_name = item.given_name ?? "";
        this.locale = item.locale ?? "";
        this.name = item.name ?? "";
        this.nickname = item.nickname ?? "";
        this.picture = item.picture ?? "";
        this.sub = item.sub ?? "";
        this.updated_at = item.updated_at ?? "";

    }

}
