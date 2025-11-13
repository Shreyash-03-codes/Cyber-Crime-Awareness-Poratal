package com.cybersamajh.enums;

import java.util.Set;

public enum Role {
    ADMIN(Set.of(Permissions.APPROVE,Permissions.ACCEPT,Permissions.READ,Permissions.WRITE,Permissions.UPDATE,Permissions.DELETE)),
    USER(Set.of(Permissions.WRITE,Permissions.READ));

    private final Set<Permissions> permissions;

    Role(Set<Permissions> permissions){
        this.permissions=permissions;
    }

    public Set<Permissions> getPermissions(){
        return this.permissions;
    }
}
